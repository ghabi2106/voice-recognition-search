import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function String2int() {
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
                    href="#parse"
                  >
                    Parse()
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#convert"
                  >
                    Convert
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#tryparse"
                  >
                    TryParse()
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
                    to="/entityframework"
                  >
                    Entity Framework
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
          <h3>How to convert string to int in C#?</h3>
          <article id="parse">
            <h6>Parse() method</h6>
            <div>
              <ul>
                <li>
                  Convertit une chaîne numérique valide en valeur entière.
                </li>
                <li>Prend en charge différents styles de nombres.</li>
                <li>
                  Prend en charge les formats personnalisés spécifiques à la
                  culture.
                </li>
              </ul>
              <img
                src="/img/dotnet/string2int-parse-syntax.PNG"
                alt="string2int parse syntax"
              />
              <Highlight language="csharp">
                {`Int16.Parse("100"); // returns 100
Int16.Parse("(100)", NumberStyles.AllowParentheses); // returns -100

int.Parse("30,000", NumberStyles.AllowThousands, new CultureInfo("en-au"));// returns 30000
int.Parse("$ 10000", NumberStyles.AllowCurrencySymbol); //returns 10000
int.Parse("-100", NumberStyles.AllowLeadingSign); // returns -100
int.Parse(" 100 ", NumberStyles.AllowLeadingWhite | NumberStyles.AllowTrailingWhite); // returns 100

Int64.Parse("2147483649"); // returns 2147483649`}
              </Highlight>
              <Highlight language="csharp">
                {`int.Parse(null);//thows FormatException
int.Parse("");//thows FormatException
int.Parse("100.00"); // throws FormatException
int.Parse( "100a"); //throws formatexception
int.Parse(2147483649);//throws overflow exception use Int64.Parse()`}
              </Highlight>
            </div>
          </article>
          <article id="convert">
            <h6>Convert Class</h6>
            <div>
              <ul>
                <li>Convertit de n'importe quel type de données en entier.</li>
                <li>Convertit null en 0, donc ne lève pas d'exception.</li>
              </ul>
              <img
                src="/img/dotnet/string2int-convert-syntax.PNG"
                alt="string2int convert syntax"
              />
              <Highlight language="csharp">
                {`Convert.ToInt16("100"); // returns short
Convert.ToInt16(null);//returns 0

Convert.ToInt32("233300");// returns int
Convert.ToInt32("1234",16); // returns 4660 - Hexadecimal of 1234

Convert.ToInt64("1003232131321321");//returns long

// the following throw exceptions
Convert.ToInt16("");//throws FormatException
Convert.ToInt32("30,000"); //throws FormatException
Convert.ToInt16("(100)");//throws FormatException
Convert.ToInt16("100a"); //throws FormatException
Convert.ToInt16(2147483649);//throws OverflowException`}
              </Highlight>
            </div>
          </article>
          <article id="tryparse">
            <h6>TryParse Method</h6>
            <div>
              <ul>
                <li>
                  Convertit différentes chaînes numériques en nombres entiers.
                </li>
                <li>
                  Convertit la représentation sous forme de chaîne de différents
                  styles de nombres.
                </li>
                <li>
                  Convertit les chaînes numériques spécifiques à la culture en
                  entiers.
                </li>
                <li>
                  Ne lève jamais d'exception. Renvoie false s'il ne peut pas
                  analyser un entier.
                </li>
                <li>Doit utiliser le paramètre out.</li>
              </ul>
              <img
                src="/img/dotnet/string2int-tryparse-syntax.PNG"
                alt="string2int tryparse syntax"
              />
              <Highlight language="csharp">
                {`string numberStr = "123456";
int number;

bool isParsable = Int32.TryParse(numberStr, out number);

if (isParsable)
    Console.WriteLine(number);
else
    Console.WriteLine("Could not be parsed.");`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
