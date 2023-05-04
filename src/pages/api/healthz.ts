const handler = async (req: any): Promise<Response> => {
  console.log('Handling request:', req.url)
  return new Response('Ok')
}

export default handler
