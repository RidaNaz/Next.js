export default function Home() {

  console.log (process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) // access environment variable

  return (
    <div>
      <h1>Environment Variables</h1>

      {  // by this, you can show data based on environments

        process.env.NODE_ENV=="development"?
        <h2>You are on Development Mode</h2>
        :
        <h2>You are on Production Mode</h2>

      }

    </div>
  )
}