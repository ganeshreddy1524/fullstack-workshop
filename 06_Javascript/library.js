function createLibrary() {
    const books = [];
    const members = [];
    const memberHistory = [];

    return {
        addBook(book) {
            const existingBook = books.find(b => b.isbn === book.isbn);
            if (existingBook) {
                existingBook.copies += book.copies;
            } else {
                books.push({ ...book });
            }
        },

        getAvailableCopies(isbn) {
            const book = books.find(b => b.isbn === isbn);
            return book ? book.copies : 0;
        },

        addMember(member) {
            const existingMember = members.find(m => m.id === member.id);
            if (!existingMember) {
                members.push({ ...member });
            }
        },

        getMembers() {
            return members;
        },

        borrowBook(memberId, isbn) {
            const member = members.find(m => m.id === memberId);
            if (!member) return "Member not found";

            const book = books.find(b => b.isbn === isbn);
            if (!book) return "Book not found";

            if (book.copies === 0) return "No copies available";

            book.copies -= 1;

            memberHistory.push({
                memberId,
                isbn,
                title: book.title,
                borrowedAt: "1-12-2025",
                returnedAt: null
            });

            return `${member.name} borrowed ${book.title}`;
        },

        returnBook(memberId, isbn) {
            const member = members.find(m => m.id === memberId);
            if (!member) return "Member not found";

            const book = books.find(b => b.isbn === isbn);
            if (!book) return "Book not found";

            const history = memberHistory.find(
                h => h.memberId === memberId && h.isbn === isbn && h.returnedAt === null
            );

            if (!history) return "No borrow record found";

            history.returnedAt = "07-01-2026";
            book.copies += 1;

            return `${member.name} returned ${book.title}`;
        },

        getMemberHistory(memberId) {
            return memberHistory.filter(h => h.memberId === memberId);
        },
        getOverdueBooks() {
            const MAX_DAYS = 14;   
            const today = new Date();

            return memberHistory.filter(record => {
                
                if (record.returnedAt !== null) return false;

                const borrowedDate = new Date(record.borrowedAt);
                const daysBorrowed = Math.floor(
                    (today - borrowedDate) / (1000 * 60 * 60 * 24)
                );

                return daysBorrowed > MAX_DAYS;
            });
        },
        searchBooks(title){
          
            const result=books.filter(book=>{
                const matchTitle=title?book.title.toLowerCase().includes(title.toLowerCase())||book.author.toLowerCase().includes(title.toLowerCase()):true;
                
                return matchTitle
            })
            if(!result)
                return 'book not found'
            else
                return result
        }

    };
}
const library=createLibrary();
library.addBook({ isbn: '123', title: '1984', author: 'Orwell', copies: 3 })
library.addBook({ isbn: '456', title: 'Dune', author: 'Herbert', copies: 2 });
console.log(library.getAvailableCopies('123'));
library.addMember({ id: 'M1', name: 'John', email: 'john@example.com' })
library.addMember({ id: 'M2', name: 'Jane', email: 'jane@example.com' });
console.log(library.getMembers());
console.log(library.borrowBook('M1', '123'));

console.log(library.getMemberHistory('M1'));
console.log(library.getOverdueBooks());
console.log(library.searchBooks('Orwell'));
