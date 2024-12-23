import zod from "zod"

export const register = zod.object({
    username : zod.string().email(),
    password : zod.string().min(6),
    name : zod.string().optional()
})

module.exports = {
    register
}