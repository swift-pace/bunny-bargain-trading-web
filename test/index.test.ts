// test/index.test.ts
import { describe, expect, it } from "bun:test"

type HelloPirateResponse = {
    id: string
    message: string
}

describe("Test call an API", () => {
    it("Hello rust actix web", async () => {
        const response = await fetch(
            new Request("http://localhost:8080/hello-pirate"),
            {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    message: "Cpt. Jack",
                }),
            }
        ).then((res) => res.json() as Promise<HelloPirateResponse>)

        const { message } = response

        expect(message).toBe("Ahoy! Cpt. Jack")
    })
})

describe("Test call an API", () => {
    it("echo", async () => {
        const response = await fetch(
            new Request("http://localhost:8080/echo"),
            {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    message: "My Name is Bond, James Bond",
                }),
            }
        ).then((res) => res.json() as Promise<HelloPirateResponse>)

        const { message } = response

        expect(message).toBe("My Name is Bond, James Bond")
    })
})

describe("Test call an API", () => {
    it("rust actix health check!", async () => {
        const response = await fetch(
            new Request("http://localhost:8080/health")
        ).then((res) => res.status)

        expect(response).toBe(200)
    })
})
