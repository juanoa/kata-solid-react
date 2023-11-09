import React from "react";

// TODO: Split responsibility
export const SingleResponsibilityPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    const errors = []
    if (email === "" || password === "") {
      return console.error("Enter an email and a password")
    }
    if (password.length < 5) {
      errors.push("Password too short")
    }
    if (!password.match(/[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]/)) {
      errors.push("Password should contain a special character")
    }

    if (errors.length > 0) {
      console.error(errors)
    } else {
      console.log("Session started")
    }
  }

  const onChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center">
      <div className="bg-white flex flex-col items-center justify-center w-fit py-20 px-40 rounded-2xl gap-10">
        <div className="flex flex-col content-center items-center gap-2">
          <img src="https://picsum.photos/50/50" alt="Logo" />
          <h1 className="text-4xl">Login</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-5">
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={onChangeEmail}
            className="border p-2 rounded"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChangePassword}
            className="border p-2 rounded"
          />
          <button type="submit" className="bg-amber-500 py-2 px-5 rounded">Log In</button>
        </form>
      </div>
    </div>
  )

}