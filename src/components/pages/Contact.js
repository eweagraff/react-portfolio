const Contact = () => {
  return (
    <div>
    <form
      enctype="text/plain"
      method="post"
      action="mailto:weagraff.emily@gmail.com"
    >
       <button className="btn btn-lg ">Let's Connect!</button>
    </form>
    <a href="https://github.com/eweagraff">
    <button className="btn btn-lg">Github
  
    </button>
  
    </a>
    <a href="https://www.linkedin.com/in/emily-weagraff/">
      <button className="btn btn-lg">Linkedin</button>
    </a>

    </div>
  
  
  );
};

export default Contact;
