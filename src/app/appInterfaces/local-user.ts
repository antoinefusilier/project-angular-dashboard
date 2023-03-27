export interface LocalUser {

  _id: string,
  first_name: string,
  last_name: string | null,
  email: string | null,

  secret: {
    token_id: string,
    public_key: string
  }
  provider: "google.com" | "github.com" | null

}
