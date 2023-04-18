```mermaid
sequenceDiagram

    Actor Broad Integration Test

    Actor In memory Integration Test

    Box LightGrey Group Incoming IO

    participant Rest Service

    participant API Implementation

    end

    Box LightBlue Group Business Application

    participant Provided Business API

    participant Application Implementation

    participant Required Business API

    participant model as Functional or Object Business Rules

    end

    Box LightGrey Group Outgoing IO

    participant Persistance

    actor Real or In Memory Database

    end

    Broad Integration Test->>+Rest Service: External API Call

    In memory Integration Test->>+API Implementation: Internal API Call

    Rest Service->>+API Implementation: is implemented by

    API Implementation->>+Provided Business API: Call Use Case<br/>with a Command

    Provided Business API->>+Application Implementation: is implemented by

    Application Implementation->>+Required Business API: Get Additional Data For Command

    Required Business API->>+Persistance: is implemented by

    Actor Real or In Memory Database

    Persistance->>+Real or In Memory Database: Read Query

    Real or In Memory Database->>-Persistance:

    Persistance->>-Required Business API:

    Required Business API->>-Application Implementation:

    Application Implementation->>+model: Tell don't Ask Call

    model->>-Application Implementation: Command result

    Application Implementation->>+Required Business API: Publish Command's Result

    Required Business API->>+Persistance: is implemented by

    Persistance->>+Real or In Memory Database: Write Query

    Real or In Memory Database->>-Persistance:

    Persistance->>-Required Business API:

    Required Business API->>-Application Implementation:

    Application Implementation->>-Provided Business API:

    Provided Business API->>-API Implementation:

    API Implementation->>-Rest Service:

    API Implementation->>-In memory Integration Test:
    ```
