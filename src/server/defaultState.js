import md5 from 'md5';

export const defaultState = {
    session: {
        authenticated: false
    },
    users: [{
        id: "U1",
        name: "Dev",
        passwordHash: md5("xxx")
    },
    {
        id: "U2",
        name: "Kakavski",
        passwordHash: md5("yyy")
    }],
    groups: [{
        name: "ToDo",
        id: "G1",
        owner: "U1"
    },
    {
        name: "Doing",
        id: "G2",
        owner: "U1"
    },
    {
        name: "Done",
        id: "G3",
        owner: "U1"
    }],
    tasks: [
        {
            name: "Do tests",
            id: "T1",
            group: "G1",
            owner: "U1",
            isComplete: false
        },
        {
            name: "Factor tests",
            id: "T2",
            group: "G1",
            owner: "U1",
            isComplete: false
        },
        {
            name: "Eat more cheese",
            id: "T3",
            group: "G1",
            owner: "U1",
            isComplete: false
        }


    ],
    comments: [{
        owner: "U1",
        id: "C1",
        task: "T1",
        conent: "great work!"
    }]
}