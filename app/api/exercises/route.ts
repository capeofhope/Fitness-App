import { NextRequest } from "next/server";

export async function GET(request: NextRequest){
    try{
        const {searchParams}=new URL(request.url);
        const exerciseId=searchParams.get("exerciseId");
        if(!exerciseId){
            return new Response(JSON.stringify({message:"Exercise ID is required"}),{status:400});
        }
        const res=await fetch(`https://exercisedb.p.rapidapi.com/exercises/exercise/${exerciseId}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.EXERCISE_DB_API_KEY!,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        });
        const data=await res.json();
        return new Response(JSON.stringify(data));
    }catch(err:any){
        return new Response(JSON.stringify({message:err.message}),{status:500});
    }
}