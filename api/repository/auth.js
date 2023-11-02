export const registerRepo = async (user) => {
    try{
        await user.save()
        return true
    }catch(e){
        console.log(e)
        return false
    }
}