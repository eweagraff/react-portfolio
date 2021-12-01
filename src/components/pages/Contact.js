const Contact = () => {
  return (
    <div>
      <ul>
        <li>
    <form
      enctype="text/plain"
      method="post"
      action="mailto:weagraff.emily@gmail.com"
    >
       <button className="btn btn-lg ">weagraff.emily@gmail.com</button>
    </form>
    </li>
    <li>

    <a href="https://github.com/eweagraff">
    <button className="btn btn-lg">Github
  
    </button>

  
    </a>
    </li>
    <li>
    <a href="https://www.linkedin.com/in/emily-weagraff/">
      <button className="btn btn-lg">Linkedin</button>
    </a>
    </li>
    </ul>

    </div>
  
  
  );
};

export default Contact;
