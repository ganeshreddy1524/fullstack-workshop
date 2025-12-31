show databases;
use revature;
show tables;
select * from employees;
select count(*) as total_employees,
round(avg(salary),2),
max(salary),department from employees group by department having count(*)>2;

