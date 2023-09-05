export default function NewNote() {
    return (
        <div>
            <h1>New Note</h1>
            <div id="new">
                <form action="/new" method="POST">
                    <input
                        id="entry"
                        type="text"
                        name="post" />
                    <br />
                    <input
                        type="submit"
                        name=""
                        value="Submit" />
                </form>
            </div>
        </div>
    )
}
