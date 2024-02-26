export default function CurveDown (props) {
    const {color} = props
    return (
        <div className="svg-container">
        <svg
          className="bidon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1280 32"
        >
          <path
            fill={color}
            d="M255.094 32C90.868 32 16.604 10.667 0 0h1280c-146.42 53.17-356.226 15.261-584.906 15.261-228.679 0-234.717 16.739-440 16.739Z"
          ></path>
        </svg>
      </div>
    )
}