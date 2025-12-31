select name,department,salary,
dense_rank() over ( order by salary desc) 
from employees
 order by salary 
 desc limit 3