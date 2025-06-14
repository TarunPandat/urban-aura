import os from 'os'

export async function GET() {
    return Response.json({
        hostname: os.hostname(),
    })
}
