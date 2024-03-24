const PropsTest = ({name, cast="Sheikh"}:{name:string, cast?:string}) => {
                                      // Passing default value to cast and making it optional in defining type
  return (
    <div>
        <h3>{`Hello ${name} ${cast}`}</h3>
    </div>
  )
}

export default PropsTest