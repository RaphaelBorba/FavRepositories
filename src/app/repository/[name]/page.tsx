
export default function Repository({params}:{params:{
    id:string
}}){

    
    console.log(params)

    return(

        <main>
            
            {`ID: ${params.id}`}
        </main>
    )
}