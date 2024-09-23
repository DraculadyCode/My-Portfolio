export default function Logout({ setUser }) {
    return (
        <button onClick={e=>setUser(null)}>
            Logout
        </button>
    )

}