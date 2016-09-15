---
layout: page
title: Contributing
---

# Contributing

## 	[View on Github](#)

## Getting Started

**Review the documentation.** No account is needed to review the updated version of the Mobile Threat Catalogue. Simply follow [this link](#) and enjoy at your leisure. However, if you wish to comment you must…

1. **Establish a GitHub account.** In order to submit a comment through the GitHub "Issues" feature, you will need to create a GitHub account. This can be done by proceeding to [github.com/join](https://github.com/join). GitHub allows you to remain pseudonymous if you would like, just make sure you select the options that suit you on the "Profile" and "Emails" pages of your "Personal Settings."  We also highly encourage you to turn on two-factor authentication in the "Security" page, also part of "Personal Settings."  
  ![How to create account]({{ site.baseurl }}/img/create_github_account.png)

2. **Open an issue.** As you are reading and identify comments you would like to make:

    1. Click on the "Send Feedback" link in the footer of the page.

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
            - **Possible Countermeasures**: Provide any measures that hinder the successful realization of, reduce the impact of, or improve recovery following incidents involving this threat.
            - **References**: Provide any references to supporting sources is the following format.
                - Author(s), "Name of Document", in Name of Publication, [type of resource], Date of Publication, URL (if available online)


    6. Hit "Submit New Issue" and you are done!  
    ![Submit issue]({{ site.baseurl }}/img/submit_new_issue.png)

    7. If you want to keep up with others comments through email and monitor future changes, make sure you choose to "Watch" the project!  
    ![Watch project]({{ site.baseurl }}/img/watch_project.png)

If you are familiar with Github you are also welcome to provide suggestions to concrete changes as a pull request. Please provide information about organization and a rationale for suggested change.


## Adding New Threats with Pull Requests
1. Fork the repository
2. Identify the category you feel the threat falls under. Each category has a respective folder in the root of the repository. The folders will all end with ``-threats``. The available categories are as follows:
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
3. Inside the folder create a new markdown file with the next incremental ID for the filename.
4. Copy the base template below into the file.

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
                -
                -
        ---

5. Fill in each of the fields with the following information. Wrapping any long strings in double quotes and escaping any internal quotes.
    - Threat Category: Identify the category you feel the threat falls under.
    - Threat: Provide a description of the threat.
    - Threat Origin: If possible, provide at least one resource that describes the nature of this threat.
    - Exploit Example: If possible, provide at least one source that evidences the threat has been realized, either in a laboratory setting or in-the-wild.
    - CVE Example: If this threat is related to a published CVE, provide one or more CVE numbers.
    - Possible Countermeasures: Provide any measures that hinder the successful realization of, reduce the impact of, or improve recovery following incidents involving this threat.
6. Submit a pull request.


## Adding a Reference
1. Find the ``references.md`` file located in the ``_includes`` folder
2. Make a new entry at the bottom of the file with the following format
    - ``[^ReferenceID]: Reference Text``
3. Back in the threat file, make a call to the newly added reference using the following format ``[^ReferenceID]``
4. Create a pull request


## Adding a Glossary Term
1. Find the ``glossary-terms.yml`` file located in the ``_data`` folder
2. Add a new entry to the bottom of the file using the following format:

        -
            term:
            definition:

3. Create a pull request.
