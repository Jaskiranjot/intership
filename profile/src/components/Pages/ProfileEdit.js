export function nameObject({
    headline, img}) {
        return (
            <div>
            <h1 className= "heading"> {headline}</h1>
            <img src={img} alt="photo"></img>
            </div>
        )
    }

export function oppSection({date}) {
    return(
        <div className="opportunitiyTable">
            <ul>
    <li>date available: {date}</li>
    <li>no date</li>
            </ul>
        </div>
    )
}
   

export function hours({success}) {
return (
    <div className="volunteer">
        <p>total hours = {hours + success}</p>
    </div>
)
}
  
