books:{
    _id: objectId(),
    title: String,
    ISBN: String,
    authors: [String],
    tags:[String],
    students:[{
        returndate: Date,
        student: Student
    }]
}
db.books.createIndex({tags: 1, "students.returndate":1});
db.books.createIndex({authors:1, ISBN:1});

students:{
    _id: objectId(),
    firstname: String,
    lastname: String,
    contact: {},
    books:[{
        title: String,
        ISBN: String,
        authors: [String],
        tags:[String],
        returndate: Date
    }]
}
db.students.createIndex({"books.tags":1, "returndate.returndate": 1});