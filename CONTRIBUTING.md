# Contributing

## Adding New Threats
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

    ```yaml
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
    ```
5. Fill in each of the fields with the following information. Wrapping any long strings in double quotes:
    - Threat Category: Identify the category you feel the threat falls under.
    - Threat: Provide a description of the threat.
    - Threat Origin: If possible, provide at least one resource that describes the nature of this threat.
    - Exploit Example: If possible, provide at least one source that evidences the threat has been realized, either in a laboratory setting or in-the-wild.
    - CVE Example: If this threat is related to a published CVE, provide one or more CVE numbers.
    - Possible Countermeasures: Provide any measures that hinder the successful realization of, reduce the impact of, or improve recovery following incidents involving this threat.
6. Submit a pull request.


### Adding a Reference
1. Find the ``references.md`` file located in the ``_includes`` folder
2. Make a new entry at the bottom of the file with the following format
    - ``[^ReferenceID]: Reference Text``
3. Back in the threat file, make a call to the newly added reference using the following format ``[^ReferenceID]``
4. Create a pull request


### Adding a Glossary Term
1. Find the ``glossary-terms.yml`` file located in the ``_data`` folder
2. Add a new entry to the bottom of the file using the following format:

    ```yaml
        -
            term:
            definition:
    ```
3. Create a pull request.

## Providing Other Comments
Have a general comment or want to request a change? Open an issue here on Github.

For each comment to the Mobile Threat Catalogue, please provide the following:
- Threat ID: If the comment is specific to a given threat, provide the ID for that threat. Otherwise, leave this blank.
- Type of Comment: Enter the letter that best describes the nature of your comment:
    - E - Editorial comments (e.g. spelling, grammar, or formatting)
    - G - General comments on how information has been presented (e.g. format, organization, phrasing, diction, or terminology)
    - T - Technical comments on what information has been presented (e.g. correctness of facts, validity of any assumptions or conclusions, level of detail, or contextual relevance)
- Proposed Change: With as much detail as possible, what change should be made.
- Justification: Provide reasoning as to why the proposed change is necessary. For technical comments, references to supporting sources is encouraged.
