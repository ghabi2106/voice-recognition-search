import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function UnitTesting() {
  return (
    <>
      <aside className="bd-aside sticky-xl-top text-muted align-self-start mb-3 mb-xl-5 px-2">
        <h2 className="h6 pt-4 pb-3 mb-4 border-bottom">On this page</h2>
        <nav className="small" id="toc">
          <ul className="list-unstyled">
            <li className="my-2">
              <button
                className="btn d-inline-flex align-items-center"
                data-bs-toggle="collapse"
                aria-expanded="true"
                data-bs-target="#contents-collapse"
                aria-controls="contents-collapse"
              >
                Contents
              </button>
              <ul
                className="list-unstyled ps-3 collapse show"
                id="contents-collapse"
              >
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#saga"
                  >
                    Saga
                  </a>
                </li>
              </ul>
            </li>
            <li className="my-2">
              <button
                className="btn d-inline-flex align-items-center"
                data-bs-toggle="collapse"
                aria-expanded="true"
                data-bs-target="#contents-collapse"
                aria-controls="contents-collapse"
              >
                Related links
              </button>
              <ul
                className="list-unstyled ps-3 collapse show"
                id="contents-collapse"
              >
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/docker"
                  >
                    Docker
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/server"
                  >
                    Web server implementations
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/httpsys"
                  >
                    HTTP.sys web server
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/iis"
                  >
                    IIS
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/kestrel"
                  >
                    Kestrel
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="bd-cheatsheet container-fluid bg-body">
        <section id="dotnet-core">
          <h2 className="sticky-xl-top fw-bold p-0 m-0">Contents</h2>
          <h3>Unit Testing</h3>
          <article id="saga">
            <h6>Saga</h6>
            <div>
              <h6>
                <strong>1. Basics of Unit Testing</strong>
              </h6>
              <ul>
                <li>
                  <p>
                    <strong>What is unit testing? Why is it important?</strong>
                  </p>
                  <ul>
                    <li>
                      Les tests unitaires en .NET sont un moyen essentiel de
                      vérifier que les composants individuels d'une application
                      fonctionnent comme prévu. Ils sont généralement écrits
                      avec des frameworks comme <strong>xUnit</strong>,{" "}
                      <strong>NUnit</strong>, ou <strong>MSTest</strong>.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>
                      What are the characteristics of a good unit test?
                    </strong>
                  </p>
                  <ul>
                    <li>
                      <strong>Isolated</strong>: Does not depend on external
                      systems (like databases or APIs).
                    </li>
                    <li>
                      <strong>Deterministic</strong>: Produces the same result
                      every time it's run.
                    </li>
                    <li>
                      <strong>Fast</strong>: Executes quickly to enable frequent
                      testing.
                    </li>
                    <li>
                      <strong>Readable and Maintainable</strong>: Clear and
                      concise to understand and update.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>
                      What’s the difference between unit testing and integration
                      testing?
                    </strong>
                  </p>
                  <ul>
                    <li>
                      <strong>Unit Testing</strong>: Focuses on individual
                      components in isolation.
                    </li>
                    <li>
                      <strong>Integration Testing</strong>: Tests how multiple
                      components interact with each other.
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>2. Frameworks and Tools</strong>
              </h6>
              <ul>
                <li>
                  <p>
                    <strong>
                      What are some popular unit testing frameworks?
                    </strong>
                  </p>
                  <ul>
                    <li>
                      <strong>.NET</strong>: xUnit, NUnit, MSTest.
                    </li>
                    <li>
                      <strong>JavaScript/TypeScript</strong>: Jest, Mocha,
                      Jasmine.
                    </li>
                    <li>
                      <strong>Java</strong>: JUnit, TestNG.
                    </li>
                    <li>
                      <strong>Python</strong>: unittest, pytest.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>
                      Which .NET testing framework do you prefer and why?
                    </strong>
                  </p>
                  <ul>
                    <li>
                      Example:{" "}
                      <em>
                        "I prefer xUnit for .NET projects due to its
                        extensibility, support for parallel test execution, and
                        community support."
                      </em>
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>3. Writing and Structuring Tests</strong>
              </h6>
              <ul>
                <li>
                  <strong>How do you write a unit test?</strong>
                  <ul>
                    <li>Identify a function or method to test.</li>
                    <li>Define the input (arrange).</li>
                    <li>Call the method (act).</li>
                    <li>Verify the output (assert).</li>
                  </ul>
                </li>
              </ul>
              <p>
                Example:
                <Highlight language="csharp">
                  {`[Fact]
public void Add_ShouldReturnSum_WhenGivenTwoNumbers()
{
    // Arrange
    var calculator = new Calculator();
    int a = 5, b = 3;

    // Act
    var result = calculator.Add(a, b);

    // Assert
    Assert.Equal(8, result);
}`}
                </Highlight>
              </p>
              <ul>
                <li>
                  <p>
                    <strong>
                      What naming conventions do you follow for unit tests?
                    </strong>
                  </p>
                  <ul>
                    <li>
                      Example:{" "}
                      <code>MethodName_StateUnderTest_ExpectedBehavior</code>,
                      e.g., <code>Add_NegativeNumbers_ReturnsSum</code>.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>What is the AAA pattern?</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>Arrange</strong>: Set up the test data and
                      dependencies.
                    </li>
                    <li>
                      <strong>Act</strong>: Execute the functionality being
                      tested.
                    </li>
                    <li>
                      <strong>Assert</strong>: Verify the result against the
                      expected outcome.
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>4. Mocking and Isolation</strong>
              </h6>
              <ul>
                <li>
                  <p>
                    <strong>What are mocks, stubs, and fakes?</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>Mocks</strong>: Simulated objects that verify the
                      behavior of a system under test.
                    </li>
                    <li>
                      <strong>Stubs</strong>: Provide pre-determined responses
                      to calls made during the test.
                    </li>
                    <li>
                      <strong>Fakes</strong>: Simplified implementations used
                      for testing.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>What mocking frameworks have you used?</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>.NET</strong>: Moq, NSubstitute, FakeItEasy.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>
                      How would you mock a dependency in a unit test?
                    </strong>
                    Example using Moq in .NET:
                    <Highlight language="csharp">
                      {`var mockRepository = new Mock<IRepository>();
mockRepository.Setup(repo => repo.GetData()).Returns(new List<string> { "Item1", "Item2" });

var service = new MyService(mockRepository.Object);
var result = service.GetProcessedData();

Assert.Equal(2, result.Count);`}
                    </Highlight>
                  </p>
                </li>
              </ul>
              <h6>
                <strong>5. Advanced Unit Testing Topics</strong>
              </h6>
              <ul>
                <li>
                  <p>
                    <strong>What is test-driven development (TDD)?</strong>
                  </p>
                  <ul>
                    <li>
                      TDD is a practice where tests are written before the
                      actual implementation. The process follows the{" "}
                      <strong>Red-Green-Refactor</strong> cycle:
                      <ul>
                        <li>
                          <strong>Red</strong>: Write a failing test.
                        </li>
                        <li>
                          <strong>Green</strong>: Write just enough code to make
                          the test pass.
                        </li>
                        <li>
                          <strong>Refactor</strong>: Optimize the code while
                          ensuring tests still pass.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>
                      How do you handle external dependencies like databases in
                      unit tests?
                    </strong>
                  </p>
                  <ul>
                    <li>
                      Use mocking frameworks or in-memory databases (e.g.,
                      SQLite for EF Core).
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>What are parameterized tests?</strong>
                  </p>
                  <ul>
                    <li>
                      Tests that run the same code with multiple inputs and
                      expected outputs. Example with xUnit:
                      <Highlight language="csharp">
                        {`[Theory]
[InlineData(2, 3, 5)]
[InlineData(-1, 1, 0)]
[InlineData(0, 0, 0)]
public void Add_ShouldReturnCorrectSum(int a, int b, int expected)
{
    var calculator = new Calculator();
    var result = calculator.Add(a, b);
    Assert.Equal(expected, result);
}`}
                      </Highlight>
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>6. Code Coverage</strong>
              </h6>
              <ul>
                <li>
                  <p>
                    <strong>
                      What is code coverage, and how do you measure it?
                    </strong>
                  </p>
                  <ul>
                    <li>
                      Code coverage is a metric that shows the percentage of
                      code executed during testing. Tools like{" "}
                      <strong>Coverlet</strong> and{" "}
                      <strong>dotnet-reportgenerator</strong> are used for
                      measuring it in .NET.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>
                      Is 100% code coverage always achievable or necessary?
                    </strong>
                  </p>
                  <ul>
                    <li>
                      No, because not all code paths (e.g., logging or exception
                      handling) add significant value to test. Focus on critical
                      and complex logic.
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>7. Common Challenges</strong>
              </h6>
              <ul>
                <li>
                  <p>
                    <strong>How do you test private methods?</strong>
                  </p>
                  <ul>
                    <li>
                      Refactor private methods into smaller public methods if
                      they need testing.
                    </li>
                    <li>Use reflection (not recommended unless necessary).</li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>How do you deal with flaky tests?</strong>
                  </p>
                  <ul>
                    <li>
                      Identify the root cause (e.g., dependency on external
                      systems).
                    </li>
                    <li>Mock unstable dependencies.</li>
                    <li>Increase timeout thresholds for slow-running tests.</li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>
                      What is a test double, and when would you use one?
                    </strong>
                  </p>
                  <ul>
                    <li>
                      Test doubles are substitutes for real components (e.g.,
                      mocks, stubs, or fakes). Use them when testing components
                      that interact with external systems.
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>8. Examples of Real-Life Scenarios</strong>
              </h6>
              <ul>
                <li>
                  <strong>How would you test an API endpoint?</strong>
                  <ul>
                    <li>
                      Use frameworks like <strong>REST-assured</strong> or{" "}
                      <strong>Postman</strong> for API testing.
                    </li>
                    <li>
                      For unit tests in .NET:
                      <Highlight language="csharp">
                        {`[Fact]
public async Task GetUsers_ShouldReturnOk_WithValidUsers()
{
    // Arrange
    var mockRepository = new Mock<IUserRepository>();
    mockRepository.Setup(repo => repo.GetUsersAsync()).ReturnsAsync(new List<User> { new User { Id = 1, Name = "John" } });

    var controller = new UserController(mockRepository.Object);

    // Act
    var result = await controller.GetUsers();

    // Assert
    var okResult = Assert.IsType<OkObjectResult>(result);
    var users = Assert.IsType<List<User>>(okResult.Value);
    Assert.Single(users);
}`}
                      </Highlight>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  <strong>
                    How do you ensure thread safety in tests involving
                    asynchronous code?
                  </strong>
                  <ul>
                    <li>
                      Use <code>async</code>/<code>await</code> correctly.
                    </li>
                    <li>Avoid sharing mutable state across tests.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
