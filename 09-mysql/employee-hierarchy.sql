select e1.name as manager_name,e2.name as employee_name from employees
 e1 join employees e2 on e1.id=e2.manager_id;
 