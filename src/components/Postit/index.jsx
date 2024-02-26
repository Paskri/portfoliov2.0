import './postit.css'

export default function Postit(props) {
  const { text } = props
  return <div className="post-it">{text}</div>
}
