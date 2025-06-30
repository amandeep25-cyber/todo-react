

const ErrorMessage = ({listItems})=>{
    if(listItems.length==0){
        return <p className="error-msg">No Task yet.</p>
    }
}

export default ErrorMessage;