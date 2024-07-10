# Lesson 3: Developing unit tests using GitHub Copilot

Testing is crucial to developing quality software, as it ensures that the functionality that we implement in our applications work as intended.

In this lesson, we're going to learn how we can use GitHub Copilot and GitHub Copilot Chat in Visual Studio Code to generate unit tests, using the Chat view, inline chat and code completions that we learnt in the previous lesson.

Creating unit tests manually can be time-consuming and error-prone. There's edge cases and boundary conditions that we need to be mindful of, and GitHub Copilot can help identify these for us.

By the end of this lesson, you'll know how to:

- Create unit tests in VS Code using GitHub Copilot and GitHub Copilot Chat.
- Create unit tests for edge cases and boundary conditions using GitHub Copilot Chat

## GitHub Copilot and Unit Testing

GitHub Copilot Chat can be used to suggest unit tests for our code. When we specify a method signature and body, GitHub Copilot Chat can suggest test cases that cover input parameters and expected outputs. Once we have a few test cases, we can use GitHub Copilot to generate code suggestions for additional test cases.

Using code line completions as we have done when generating code, we can generate unit tests and reduce the repetitive process of writing unit tests, and ensure that our code is thoroughly tested.

Remember, GitHub Copilot Chat will use your code as context to suggest assertions to ensure that the function you want to test works correctly. Copilot Chat can also suggest test cases for error handling, null values, or unexpected input types.

As always, the generated code may not cover ALL possible scenarios. You'll need to manually test and perform code reviews to ensure that the generated code does what you need it to do. It's a Copilot after all....

# Challenge: Add Unit Tests to your Todo Application