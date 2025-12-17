// server.js


const http = require('http');
const url = require('url');

const PORT = 3000;


// In-memory "database"
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];
let nextId = 3;

// Helper: Parse JSON body
function parseBody(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            } catch (e) {
                reject(e);
            }
        });
        req.on('error', reject);
    });
}

// Helper: Send JSON response
function sendJSON(res, statusCode, data) {
    res.writeHead(statusCode, {
        'Content-Type': 'application/json',
        'X-Powered-By': 'Node.js HTTP Exercise'
    });
    res.end(JSON.stringify(data, null, 2));
}

// Helper: Send error response
function sendError(res, statusCode, message) {
    sendJSON(res, statusCode, { error: message });
}

const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;
    const method = req.method;

    console.log(`${method} ${path}`);

    // CORS headers (for browser testing)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle preflight
    if (method === 'OPTIONS') {
        res.writeHead(204);
        return res.end();
    }

    try {
        // Route: GET /
        if (path === '/' && method === 'GET') {
            return sendJSON(res, 200, {
                message: 'Welcome to the HTTP Exercise Server!',
                endpoints: {
                    'GET /users': 'List all users',
                    'GET /users/:id': 'Get user by ID',
                    'POST /users': 'Create new user',
                    'PUT /users/:id': 'Replace user',
                    'PATCH /users/:id': 'Update user',
                    'DELETE /users/:id': 'Delete user'
                }
            });
        }

        // Route: GET /users
        if (path === '/users' && method === 'GET') {
            // TODO: Implement pagination using query params
            return sendJSON(res, 200, { users, count: users.length });
        }

        // Route: GET /users/:id
        const userMatch = path.match(/^\/users\/(\d+)$/);
        if (userMatch && method === 'GET') {
            const id = parseInt(userMatch[1]);
            const user = users.find(u => u.id === id);

            if (!user) {
                return sendError(res, 404, `User with ID ${id} not found`);
            }
            return sendJSON(res, 200, user);
        }

        // Route: POST /users
        if (path === '/users' && method === 'POST') {
            const body = await parseBody(req);

            // Validation
            if (!body.name || !body.email) {
                return sendError(res, 400, 'Name and email are required');
            }

            // Check duplicate email
            if (users.some(u => u.email === body.email)) {
                return sendError(res, 409, 'Email already exists');
            }

            const newUser = {
                id: nextId++,
                name: body.name,
                email: body.email
            };
            users.push(newUser);

            res.setHeader('Location', `/users/${newUser.id}`);
            return sendJSON(res, 201, newUser);
        }

        // Route: PUT /users/:id
        if (userMatch && method === 'PUT') {
            const id = parseInt(userMatch[1]);
            const body = await parseBody(req);

            // Validation
            if (!body.name || !body.email) {
                return sendError(res, 400, 'Name and email are required for PUT');
            }

            const index = users.findIndex(u => u.id === id);
            if (index === -1) {
                return sendError(res, 404, `User with ID ${id} not found`);
            }

            users[index] = { id, name: body.name, email: body.email };
            return sendJSON(res, 200, users[index]);
        }

        // Route: PATCH /users/:id
        if (userMatch && method === 'PATCH') {
            const id = parseInt(userMatch[1]);
            const body = await parseBody(req);

            const index = users.findIndex(u => u.id === id);
            if (index === -1) {
                return sendError(res, 404, `User with ID ${id} not found`);
            }

            // Partial update
            if (body.name) users[index].name = body.name;
            if (body.email) users[index].email = body.email;

            return sendJSON(res, 200, users[index]);
        }

        // Route: DELETE /users/:id
        if (userMatch && method === 'DELETE') {
            const id = parseInt(userMatch[1]);
            const index = users.findIndex(u => u.id === id);

            if (index === -1) {
                return sendError(res, 404, `User with ID ${id} not found`);
            }

            users.splice(index, 1);
            res.writeHead(204);
            return res.end();
        }
        // Add these routes to your server

// Route: GET /headers - Echo request headers
if (path === '/headers' && method === 'GET') {
    const requestHeaders = {
        'user-agent': req.headers['user-agent'],
        'accept': req.headers['accept'],
        'accept-language': req.headers['accept-language'],
        'authorization': req.headers['authorization'],
        'all-headers': req.headers
    };

    res.setHeader('X-Custom-Header', 'Hello from server!');
    res.setHeader('X-Request-Id', Date.now().toString(36));

    return sendJSON(res, 200, {
        message: 'Request headers received',
        headers: requestHeaders
    });
}

// Route: GET /protected - Requires Authorization
if (path === '/protected' && method === 'GET') {
    const auth = req.headers['authorization'];

    if (!auth) {
        res.setHeader('WWW-Authenticate', 'Bearer realm="api"');
        return sendError(res, 401, 'Authorization required');
    }

    if (!auth.startsWith('Bearer ')) {
        return sendError(res, 401, 'Invalid authorization format');
    }

    const token = auth.substring(7);
    if (token !== 'valid-token-123') {
        return sendError(res, 403, 'Invalid token');
    }

    return sendJSON(res, 200, {
        message: 'Access granted!',
        user: { name: 'Authenticated User' }
    });
}

// Route: GET /download - File download headers
if (path === '/download' && method === 'GET') {
    const data = JSON.stringify(users, null, 2);

    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Content-Disposition': 'attachment; filename="users.json"',
        'Content-Length': Buffer.byteLength(data)
    });
    return res.end(data);
}

// Route: GET /cache - Demonstrate caching headers
if (path === '/cache' && method === 'GET') {
    const etag = `"${users.length}-${Date.now()}"`;

    // Check if client has cached version
    if (req.headers['if-none-match'] === etag) {
        res.writeHead(304);
        return res.end();
    }

    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60',
        'ETag': etag,
        'Last-Modified': new Date().toUTCString()
    });
    return res.end(JSON.stringify({ data: 'This response can be cached for 60 seconds' }));
}

        // 404 for unknown routes
        sendError(res, 404, 'Not Found');

    } catch (error) {
        console.error('Server Error:', error);
        sendError(res, 500, 'Internal Server Error');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});