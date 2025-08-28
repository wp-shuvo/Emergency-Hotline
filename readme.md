<h1> What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? </h1>
<p> 1.<b>getElementById</b>: Find an element by id attribute. </p>
<p> 2.<b>getElementsByClassName</b>: Finds all elements with a class attribute(gives a list). </p>
<p> 2.<b>querySelector</b>: Find the first element that matches a CSS selector. </p>
<p> 2.<b>querySelectorAll</b>: Finds all elements that match a CSS selector. </p>

<h1> How do you create and insert a new element into the DOM? </h1>
<p>
<h4>To create and insert a New Element into the DOM, We need to follow 3 Steps:</h4> <br>
      <ol>
        <li>
          <h5>To Create Element:</h5>
          <p>We need to use <mark>" document.createElement("tagName") "</mark> to create a new element.</p>
        </li>
        <li>
           <h5>Add Content or attribute to newElement:</h5>
          <p>We can set text,<mark><b>id, class</b></mark> to the newElement.</p>
  </li>
        <li>
          <h5>Insert the element into the DOM:</h5>
          <ul>
            <li>First, we need to select the container on the DOM</li>
            <li>Then, <mark>append() </mark> the newElenent</li>
          </ul>
        </li>
      </ol>
</p>
<h1> What is Event Bubbling and how does it work? </h1>
<p>
      Event bubbling is the default DOM (Document Object Model) event propagation behavior where an event, triggered on a nested element, travels up the DOM tree from the target element to its parent, grandparent, and ultimately to the root document element.
</p>
<h1> What is Event Delegation in JavaScript? Why is it useful? </h1>
<p>
      <b>Event Delegation: </b> It's technique based on <mark>Event Bubbling</mark>.There, we place an event listener on the parent element at once, instead of separately placing an event listener on each small child element.
</p>
<h3>Event Delegation is Useful</h3>
<p>
      Event Delegation makes code shorter, runs faster, and easily handles new elements.
</p>
<h1> What is the difference between preventDefault() and stopPropagation() methods? </h1>

<h3>
      Difference between preventDefault() and stopPropagation() methods
</h3>
<ul>
      <li> <mark> preventDefault() </mark> → Stops the default browser behavior.</li>
      <li> <mark> stopPropagation() </mark> → Stops the event from bubbling to parents.</li>
</ul>
