
> show dbs
admin          0.000GB
config         0.000GB
human          0.000GB
human_resoure  0.000GB
local          0.000GB
> use human_resoure
switched to db human_resoure
> db.employee.insertMany([ {
   "firstName": "John",
   "lastName": "Doe",
   "salary": "25000",
   "department": "HR",
   "lastCompany": "X",
..."lastSalary": "10000",
..."overallExp": "2",
.. "contactInfo": "1234567890",
..."yearGrad": "2016",
..."gradStream": "CSE"
... },
...  {
...         "firstName": "Rohan",
...         "lastName": "Jame",
...         "salary": "30000",
...         "department": "Technical",
...         "lastCompany": "Y",
...         "lastSalary": "15000",
...         "overallExp": "1",
...         "contactInfo": "1234567860",
...         "yearGrad": "2015",
...         "gradStream": "CSE"
...     },
...     {
...         "firstName": "Jame",
...         "lastName": "Doe",
...         "salary": "35000",
...         "department": "Accounts",
...         "lastCompany": "Z",
...         "lastSalary": "20000",
...         "overallExp": "1",
...         "contactInfo": "123567890",
...         "yearGrad": "2019",
...         "gradStream": "ECE"
...     },
...     {
...         "firstName": "Sao",
...         "lastName": "Avika",
...         "salary": "30000",
...         "department": "Sales",
...         "lastCompany": "Y",
...         "lastSalary": "15000",
...         "overallExp": "2",
...         "contactInfo": "1234567860",
...         "yearGrad": "2015",
...         "gradStream": "CSE"
...     },
...     {
...         "firstName": "Jame",
...         "lastName": "roh",
...         "salary": "35000",
...         "department": "Accounts",
...         "lastCompany": "Z",
...         "lastSalary": "15000",
...         "overallExp": "2",
...         "contactInfo": "123567890",
...         "yearGrad": "2019",
...         "gradStream": "EEE"
...     }
... ])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("62eb4f12b395fb94a18fad85"),
                ObjectId("62eb4f12b395fb94a18fad86"),
                ObjectId("62eb4f12b395fb94a18fad87"),
                ObjectId("62eb4f12b395fb94a18fad88"),
                ObjectId("62eb4f12b395fb94a18fad89")
        ]
}
>
> db.employee.find()
{ "_id" : ObjectId("62eaa32e2db9060241064e73"), "firstName" : "john", "lastName" : "Doe", "salary" : "32000", "department" : "HR", "lastCompany" : "X", "lastSalary" : "10000", "overallExp" : "2", "contactInfo" : "1234567890", "yearGrad" : "2016", "gradStream" : "CSE" }
{ "_id" : ObjectId("62eaa5cb2db9060241064e74"), "firstName" : "John", "lastName" : "Doe", "salary" : "32000", "department" : "HR", "lastCompany" : "X", "lastSalary" : "10000", "overallExp" : "2", "contactInfo" : "1234567890", "yearGrad" : "2016", "gradStream" : "CSE" }
{ "_id" : ObjectId("62eaa5cb2db9060241064e75"), "firstName" : "Rohan", "lastName" : "Jame", "salary" : "30000", "department" : "Technical", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "1", "contactInfo" : "1234567860", "yearGrad" : "2015", "gradStream" : "CSE" }
{ "_id" : ObjectId("62eaa5cb2db9060241064e76"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" }
{ "_id" : ObjectId("62eaa5cb2db9060241064e77"), "firstName" : "Sao", "lastName" : "Avika", "salary" : "30000", "department" : "Sales", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "1234567860", "yearGrad" : "2015", "gradStream" : "CSE" }
{ "_id" : ObjectId("62eaa5cb2db9060241064e78"), "firstName" : "Jame", "lastName" : "roh", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
{ "_id" : ObjectId("62eb4f12b395fb94a18fad85"), "firstName" : "John", "lastName" : "Doe", "salary" : "25000", "department" : "HR", "lastCompany" : "X", "lastSalary" : "10000", "overallExp" : "2", "contactInfo" : "1234567890", "yearGrad" : "2016", "gradStream" : "CSE" }
{ "_id" : ObjectId("62eb4f12b395fb94a18fad86"), "firstName" : "Rohan", "lastName" : "Jame", "salary" : "30000", "department" : "Technical", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "1", "contactInfo" : "1234567860", "yearGrad" : "2015", "gradStream" : "CSE" }
{ "_id" : ObjectId("62eb4f12b395fb94a18fad87"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" }
{ "_id" : ObjectId("62eb4f12b395fb94a18fad88"), "firstName" : "Sao", "lastName" : "Avika", "salary" : "30000", "department" : "Sales", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "1234567860", "yearGrad" : "2015", "gradStream" : "CSE" }
{ "_id" : ObjectId("62eb4f12b395fb94a18fad89"), "firstName" : "Jame", "lastName" : "roh", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
> db.employee.find({salary:{$gt:"30000"}}).pretty()
{
        "_id" : ObjectId("62eaa32e2db9060241064e73"),
        "firstName" : "john",
        "lastName" : "Doe",
        "salary" : "32000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62eaa5cb2db9060241064e74"),
        "firstName" : "John",
        "lastName" : "Doe",
        "salary" : "32000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62eaa5cb2db9060241064e76"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62eaa5cb2db9060241064e78"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62eb4f12b395fb94a18fad87"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62eb4f12b395fb94a18fad89"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
>
> db.employee.find({yearGrad:{$gt:"2015"}}).pretty()
{
        "_id" : ObjectId("62eaa32e2db9060241064e73"),
        "firstName" : "john",
        "lastName" : "Doe",
        "salary" : "32000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62eaa5cb2db9060241064e74"),
        "firstName" : "John",
        "lastName" : "Doe",
        "salary" : "32000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62eaa5cb2db9060241064e76"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62eaa5cb2db9060241064e78"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62eb4f12b395fb94a18fad85"),
        "firstName" : "John",
        "lastName" : "Doe",
        "salary" : "25000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62eb4f12b395fb94a18fad87"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62eb4f12b395fb94a18fad89"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
> db.employee.updateMany({salary:"25000"},{$set:{salary:"32000"}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.employee.find().pretty()
{
        "_id" : ObjectId("62eaa32e2db9060241064e73"),
        "firstName" : "john",
        "lastName" : "Doe",
        "salary" : "32000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62eaa5cb2db9060241064e74"),
        "firstName" : "John",
        "lastName" : "Doe",
        "salary" : "32000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62eaa5cb2db9060241064e75"),
        "firstName" : "Rohan",
        "lastName" : "Jame",
        "salary" : "30000",
        "department" : "Technical",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "1",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62eaa5cb2db9060241064e76"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62eaa5cb2db9060241064e77"),
        "firstName" : "Sao",
        "lastName" : "Avika",
        "salary" : "30000",
        "department" : "Sales",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62eaa5cb2db9060241064e78"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62eb4f12b395fb94a18fad85"),
        "firstName" : "John",
        "lastName" : "Doe",
        "salary" : "32000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62eb4f12b395fb94a18fad86"),
        "firstName" : "Rohan",
        "lastName" : "Jame",
        "salary" : "30000",
        "department" : "Technical",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "1",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62eb4f12b395fb94a18fad87"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62eb4f12b395fb94a18fad88"),
        "firstName" : "Sao",
        "lastName" : "Avika",
        "salary" : "30000",
        "department" : "Sales",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62eb4f12b395fb94a18fad89"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
> db.employee.deleteMany({lastCompany:"Y"})
{ "acknowledged" : true, "deletedCount" : 4 }
> db.employee.find().pretty()
{
        "_id" : ObjectId("62eaa32e2db9060241064e73"),
        "firstName" : "john",
        "lastName" : "Doe",
        "salary" : "32000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62eaa5cb2db9060241064e74"),
        "firstName" : "John",
        "lastName" : "Doe",
        "salary" : "32000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62eaa5cb2db9060241064e76"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62eaa5cb2db9060241064e78"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62eb4f12b395fb94a18fad85"),
        "firstName" : "John",
        "lastName" : "Doe",
        "salary" : "32000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62eb4f12b395fb94a18fad87"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62eb4f12b395fb94a18fad89"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}