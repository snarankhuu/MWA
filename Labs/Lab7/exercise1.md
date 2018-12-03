2 ways to do
books:{
    _id: objectId(),
    title: String,
    ISBN: String,
    author: [String],
    tags:[String],
    students:[{
        returndate: Date,
        student: Student
    }]
}

students:{
    _id: objectId(),
    firstname: String,
    lastname: String,
    contact: {},
    books:[{
        title: String,
        ISBN: String,
        author: [String],
        tags:[String],
        returndate: Date
    }]
}