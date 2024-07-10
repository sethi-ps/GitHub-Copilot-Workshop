# Lesson 5: Generating documentation using GitHub Copilot

In this module, we'll learn how we can explain and document our code using the GitHub Copilot Chat extension in Visual Studio Code. We'll cover:

- Reviewing the features of GitHub Copilot Chat that can be used to explain code and generate documentation.
- Using GitHub Copilot Chat to generate explanations for complex or unfamiliar code.
- Using GitHub Copilot Chat to generate project documentation.
- Using GitHub Copilot Chat to generate inline code documentation and pull request summaries.
- Completing a "code documentation" challenge activity and reviewing a possible solution.

By the end of this lesson, you'll know how to use GitHub Copilot Chat to explain complex or unfamiliar code, generate documentation, and increase our efficiency as developers.

## Generate explanations using GitHub Copilot Chat

Explanations are great when we encounter code that is complex or unfamiliar and we need to understand how it works. This could include complex algorithms, regular expressions etc.

Copilot Chat helps explain selected code by generating natural language descriptions of the functionality and purpose of selected code. There's several ways to generate explanations of selected code using GitHub Copilot Chat:

- You can use inline chat and use ```/explain``` in your prompt.
- You can use the ```Explain This``` smart action.
- You can open the Chat view and use ```/explain #selection``` in your prompt.

You can also use explanations that address a broader scope. You can use ```@workspace``` to generate an explanation for the entire workspace. Responses can include a summary of the project, its purpose, and other information that's relevant. You can also generate explanations of a specific project file in the workspace by using the ```#file``` chat variable to specify a filename.

Here's some examples of questions that you can ask Copilot Chat to generate explanations:

- Chat view: ```@workspace Explain this project```
- Chat view: ```@workspace /explain Explain the dependencies of this project```
- Chat view: ```@workspace /explain #file:program.cs Explain how this file is used in the project```
- Inline chat: ```/explain #selection Explain how this method works```
- Inline chat: ```/explain Explain this code block```

## Generate documentation using GitHub Copilot Chat

Documentation is typically used for the following purposes:

- **Inline documentation** is used to describe the contents of a code file. It's intended for developers and testers who work on the codebase.
- **External project documentation** is used to provide an overview of the project. This documentation is intended for executive stakeholders, project managers, and end users. Developers and tester can also benefit from external documentation.

Let's explore how we can use GitHub Copilot Chat to help us write both types of documentation!

### Generate inline documentation

Good inline documentation improves the readability and maintainability of our code. GitHub Copilot can generate inline documentation quickly and accurately, performing tasks such as documenting classes and methods, to help us save time.

To generate inline documentation using GitHub Copilot, we have the following options:

- We can construct natural language prompts to generate the desired documentation.
- We can enter the ```/doc``` command in the inline chat to generate comments that describe the selected code.
- We can use the ```Generate Docs``` smart action to generate comments that describe the selected code.

### Generate external project documentation

You can use the ```@workspace``` chat participant followed by a natural language description to generate documentation for an entire workspace. By generating documentation for the workspace, you can create a high-level overview that helps other developers understand the project and its purpose.

Here's some examples we can use to generate documentation:

```@workspace Generate a project summary that can be used at an executive briefing```

```@workspace Generate a README markdown document that can be used as a repo description```

# IMPORTANT! Review the output from GitHub Copilot Chat and ensure it's correct!

GitHub Copilot is good at generating explanations and documentation based on the code that you provide and the questions that you ask.

That said, it's important that you review and correct the generated output to ensure that it's complete and accurate.

When reviewing the output, consider the following:

- Check the generated explanations and documentation for accuracy and completeness.
- Verify that the generated output aligns with the code you provided and the questions you asked.
- For documentation, correct any errors or inaccuracies in the generated output to ensure that it accurately reflects the code's behavior and purpose.
- Add additional information or context to the generated output to provide more comprehensive documentation.

# Challenge: Document your Todo application using GitHub Copilot