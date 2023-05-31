
export default function Repository({params}:{params:{
    name:string
}}){

    
    console.log(params)

    return(

        <main>
            
            {`ID: ${params.name}`}
        </main>
    )
}