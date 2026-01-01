select concat(UPPER(SUBSTRING_INDEX(name,' ',-1)),', ',UPPER(SUBSTRING_INDEX(name,' ',1))) as formatted_name,
concat(LOWER(SUBSTRING_INDEX(name,' ',1)),'.',LOWER(SUBSTRING_INDEX(name,' ',-1)),'@company.com') as email,
concat(substr(substring_index(name,' ',1),1,1),substr(substring_index(name,' ',-1),1,1)) as initials from employees