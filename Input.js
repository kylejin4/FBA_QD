export default function Input({richText, ...props}) {
    if (richText) {
        return <textarea {...props}/>;
    }
  // return a <textarea> if a richText prop is true
    return <input {...props}/>; 
      
  // return an <input> otherwise
  // forward / set the received props on the returned elements
}
