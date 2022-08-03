import Contact from "../contact/Contact"
import { contactList } from "../data/contact-list"

const Contacts=()=>{
    let res=contactList.map(c=><Contact key={c.id}
        name={c.name} email={c.email} phone={c.phone} gender={c.gender}></Contact>)
        return (
            <div>
                {res}
            </div>
        )
}
export default Contacts;