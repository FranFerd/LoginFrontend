export interface UserCredentials {
    username: string
    password: string
}

export interface UserCredentialsEmail extends UserCredentials {
    email: string
}

export interface CodeAndEMail {
    code: string
    email: string
}
