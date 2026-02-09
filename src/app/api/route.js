export const feedback=[
    {
        id: "1",
        message: "খাবার খুব ভাল ছিল"
    },
    {
        id: "2",
        message: "ওয়েটারদের ব্যাবহার আরও ভাল করতে হবে"
    },

]

export async function GET(request) {
    return Response.json({
        status:200,
        message:"Yahoo. API Created"
    })
}