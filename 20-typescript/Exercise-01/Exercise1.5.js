function formatName(firstName, middleName, lastName, suffix) {
    var fullName = firstName;
    if (middleName) {
        fullName += " " + middleName;
    }
    fullName += " " + lastName;
    if (suffix) {
        fullName += ", " + suffix;
    }
    return fullName;
}
console.log(formatName("John", undefined, "Smith"));
console.log(formatName("John", "Michael", "Smith"));
console.log(formatName("John", undefined, "Smith", "PhD"));
console.log(formatName("John", "Michael", "Smith", "Jr."));
