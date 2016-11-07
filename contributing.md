---
layout: page
title: Contributing
---

# Contributing

## 	[View on Github](https://github.com/usnistgov/mobile-threat-catalogue/)

## Submitting feedback
No account is needed to review the updated version of the Mobile Threat Catalogue. Simply follow [this link](https://github.com/usnistgov/mobile-threat-catalogue/) and enjoy at your leisure. We encourage you to provide feedback. There are several ways to provide feedback, learn more below.

- [Getting Started](#getting-started): Instructions for creating a Github account
- [Creating an Issue](#creating-an-issue): Instructions for submitting feedback
- [Creating a Pull Request](#creating-a-pull-request): The pull request mechanism is a primary way in which all content contributions are made.
    - [Adding a New Threat](#adding-a-new-threat)
    - [Adding a Reference](#adding-a-reference)
    - [Adding a Glossary Term](#adding-a-glossary-term)


### Getting Started

1. **Establish a GitHub account.** In order to submit a comment through the GitHub "Issues" feature, you will need to create a GitHub account. This can be done by proceeding to [github.com/join](https://github.com/join). GitHub allows you to remain pseudonymous if you would like, just make sure you select the options that suit you on the "Profile" and "Emails" pages of your "Personal Settings."  We also highly encourage you to turn on two-factor authentication in the "Security" page, also part of "Personal Settings."
  ![How to create account]({{ site.baseurl }}/img/create_github_account.png)

### Creating an Issue

**Open an issue.** As you are reading and identify comments or changes you would like to make:

1. Click [here](https://github.com/usnistgov/mobile-threat-catalogue/issues) to go to the issues page on Github.

2. Review open and closed issues to determine if a similar issue has already been created.

3. Click on the "New Issue" button in the upper right of the screen.
![Create issue]({{ site.baseurl }}/img/create_new_issue.png)

4. Provide a short description in the field labelled "Title" for the feedback being provided.
![Issue title]({{ site.baseurl }}/img/issue_title.png)

5. Within the field labelled "Leave a comment," fill out the comment template and provide as much information as possible.
    1. If you are adding a general comment, fill out the top half labeled "_General Comment_" and remove the bottom half labeled "_New Threat_."
        - **Threat ID**: If the comment is specific to a given threat, provide the ID for that threat. Otherwise, leave this blank.
        - **Type of Comment**: Enter the letter that best describes the nature of your comment:
            - E - Editorial comments (e.g. spelling, grammar, or formatting)
            - G - General comments on how information has been presented (e.g. format, organization, phrasing, diction, or terminology)
            - T - Technical comments on what information has been presented (e.g. correctness of facts, validity of any assumptions or conclusions, level of detail, or contextual relevance)
        - **Proposed Change**: With as much detail as possible, describe what change should be made.
        - **Justification**: Provide reasoning as to why the proposed change is necessary. For technical comments, providing references to supporting sources is encouraged.
    2. If you are requesting a new threat be added, remove the top half of the template labeled "_General Comment_" and fill out the bottom half labeled "_New Threat_."
        - **Threat Category**: Identify the category you feel the threat falls under. Choose from the categories listed at the top of each threat list page.
        - **Threat**: Provide a description of the threat.
        - **Threat Origin**: If possible, provide at least one resource that describes the nature of this threat.
        - **Exploit Example**: If possible, provide at least one source that evidences the threat has been realized, either in a laboratory setting or in-the-wild.
        - **CVE Example**: If this threat is related to a published CVE, provide one or more CVE numbers.
        - **Possible Countermeasures**: Provide any measures that hinder the successful realization of, reduce the impact of, or improve recovery following incidents involving this threat.:
            - Choose the actor that the countermeasure applies to from following list.
                - Mobile Device User
                - Mobile App Developer
                - Mobile OS Developer
                - Public App Store Provider
                - Mobile Network Operator
                - Enterprise
                - Original Equipment Manufacturer
        - **References**: Provide any references to supporting sources is the following format.
            - Author(s), "Name of Document", in Name of Publication, [type of resource], Date of Publication, URL (if available online)

6. Select one or more labels for the issue.
    - **bug**: A problem with the website.
    - **comment**: General feedback about a threat.
    - **duplicate**: Used by maintainers to mark an issue that is very similar to an already existing one.
    - **enhancement**: A change to an existing page.
    - **invalid**: Used by maintainers to mark an issue that's been raised in error.
    - **newthreat**: A new threat to be added to the repository.
    - **pending**: A valid issue that will be addressed long term or in the NISTIR itself.
    - **question**: A question directed at the maintainers.
    - **wontfix**: Used by maintainers to mark an issue that will not be resolved.

7. If you plan on resolving the issue yourself, click the "assign yourself" link in the "Assignees section." Otherwise, leave this blank.

8. Hit "Submit New Issue" and you are done!
![Submit issue]({{ site.baseurl }}/img/submit_new_issue.png)

9. If you want to keep up with others comments through email and monitor future changes, make sure you choose to "Watch" the project!
![Watch project]({{ site.baseurl }}/img/watch_project.png)

If you are familiar with Github you are also welcome to provide suggestions to concrete changes as a pull request. Please provide information about organization and a rationale for suggested change.

### Creating a Pull Request
1. Before proceeding, start by creating an issue using the [steps above](#creating-an-issue).
2. Go to the [Github page](https://github.com/usnistgov/mobile-threat-catalogue/) for the project.
3. Click on the "Fork" button in the upper right.
![Fork button]({{ site.baseurl }}/img/fork.png)
4. The project will be forked to your personal Github account. Make your changes in this repository, either directly in Github or by cloning the repository on your computer. All commits should be tagged with the issue number that corresponds to your change. ex. ``git commit -m '#4: adds mobile payment threat'`` Use the documentation in the [sections below](#adding-a-new-threat) to add a threat.
5. Once you have pushed all of your changes to the forked repository, click on the "Pull Request" button at the top of your repository page.
![Start Pull Request]({{ site.baseurl }}/img/pull_request_button.png)
6. Compare the changes that you've made and click the "Create pull request" button
7. On the "Open a Pull Request" page, set the title to "#_(corresponding issue number)_: _(title of corresponding issue)_"
8. In the body field, enter "Resolves #_(corresponding issue number)_"
9. Click "Create Pull Request"
![Create Pull Request]({{ site.baseurl }}/img/create_pull_request.png)

10. Your requested change will now be reviewed by a project maintainer.

#### Adding a New Threat
1. After forking the repository, Identify the category you feel the threat falls under. Each category has a respective folder in the root of the repository. The folders will all end with ``-threats``. The available categories are as follows:
    - Application
    - Authentication
    - Cellular
    - Ecosystem
    - EMM
    - GPS
    - LAN & PAN
    - Payment
    - Physical Access
    - Stack
    - Supply Chain
2. Inside the folder create a new markdown file with the next incremental ID for the filename.
3. Copy the base template below into the file.

        ---
            layout: threat
            ThreatCategory:
            ID:
            Threat:
            ThreatOrigin:
            ExploitExample:
                -
                -
            CVEExample:
                -
                -
            PossibleCountermeasures:
                Countermeasure one goes here:
                    - actor 1
                    - actor 2
                Countermeasure two goes here:
        ---

4. Fill in each of the fields with the following information. Wrapping any long strings in double quotes and escaping any internal quotes.
    - **Threat Category**: Identify the category you feel the threat falls under. Choose from the categories listed at the top of each threat list page.
    - **Threat**: Provide a description of the threat.
    - **Threat Origin**: If possible, provide at least one resource that describes the nature of this threat.
    - **Exploit Example**: If possible, provide at least one source that evidences the threat has been realized, either in a laboratory setting or in-the-wild.
    - **CVE Example**: If this threat is related to a published CVE, provide one or more CVE numbers.
    - **Possible Countermeasures**: Provide any measures that hinder the successful realization of, reduce the impact of, or improve recovery following incidents involving this threat.:
        - Choose the actor that the countermeasure applies to from following list.
            - Mobile Device User
            - Mobile App Developer
            - Mobile OS Developer
            - Public App Store Provider
            - Mobile Network Operator
            - Enterprise
            - Original Equipment Manufacturer

5. [Create a pull request](#creating-a-pull-request).


#### Adding a Reference

1. After forking the repository, Find the ``references.md`` file located in the ``_includes`` folder
2. Make a new entry at the bottom of the file with the following format
``[^ReferenceID]: Author(s), "Name of Document", in Name of Publication, [type of resource], Date of Publication, URL (if available online)``
3. Back in the threat file, make a call to the newly added reference using the following format ``[^ReferenceID]``
4. [Create a pull request](#creating-a-pull-request).


#### Adding a Glossary Term
1. After forking the repository, Find the ``glossary-terms.yml`` file located in the ``_data`` folder
2. Add a new entry to the bottom of the file using the following format:

        -
            term:
            definition:

3. [Create a pull request](#creating-a-pull-request).
