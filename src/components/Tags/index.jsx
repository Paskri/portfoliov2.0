import './tags.css'

export default function Tags(props) {
  const { tags } = props
  const tagList = tags.split(',')
  return (
    <div className="tags-container">
      {tagList.map((tag, index) => (
        <span className="tag" key={`tag-${index}`}>
          {tag}
        </span>
      ))}
    </div>
  )
}
