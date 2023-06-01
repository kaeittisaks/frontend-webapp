import "./style.css";
import React, { useState, pdfjs} from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Link } from 'react-router-dom';

import { PDFViewer, Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import EditorToolbar, { modules, formats } from "./EditorToolbar";


function create()  {
  
  const [content, setContent] = useState('');

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const generatePdf = () => {
    const MyDocument = () => (
      <Document>
        <Page>
          <View>
            <Text>{content}</Text>
          </View>
        </Page>
      </Document>
    );

    return (
      <PDFDownloadLink document={<MyDocument />} fileName="contrat.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Generating PDF...' : 'Save'
        }
      </PDFDownloadLink>
    );
  };

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#ffffff',
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    content: {
      fontSize: 12,
    },
  });

  {/*
//tools
const [content, setContent] = useState('');

const handleContentChange = (value) => {
  setContent(value);
};*/}


  return (
    <>
  <div className="top-nav clip-contents">
      <div className="group-1068">
       <Link to="/"> <div className="main-page-1">
          <img
          />
          <p className="main-page">Main page</p>
        </div></Link>
        <div className="box-import-file">
          {/*
          */}<img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2pekb39nnrn-241%3A522?alt=media&token=4a7e529e-07d6-418c-b618-f2fb88e9190a"
            alt="Not Found"
            className="frame-64"
          />
          <div className="frame-63">
            <div className="frame-62">

             {/*import file*/}
            <input className="custom-file-input" type="file"  accept="application/pdf" /> {/*onChange={handleFileChange} */}
             {/*import file*/}
             
             {/*<form onSubmit={handleFileSubmit}>
             <input className="custom-file-input" type="file"  accept="application/pdf" onChange={handleFileChange} /> 
               <button type="submit">Open PDF</button>
              </form>*/} 
              
              <p ></p>
            </div>
          </div>
        </div>
        <div className="botton">
          <div className="group-8">
            <img
            type="button"
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2pekb39nnrn-241%3A541?alt=media&token=d096e127-516e-46f3-94ed-22e03bb31dce"
              alt="Not Found"
              className="group-7"
              data-toggle="modal" 
              data-target="#myModal_use"
            />
            <img
            
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2v8n9aglm7c-201%3A3714?alt=media&token=0f349e10-9867-421e-9e72-89d79c32c01f"
            alt="Not Found"
            className="group-use"
            
          />
          </div>

           {/*popup new contract*/}
           <div className="modal fade" id="myModal_use" role="dialog">
                  <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="pop-up-share clip-contents">
      <div className="group-964">
        <div className="frame-157">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/8d1jczp3xfn-201%3A3738?alt=media&token=2e0d1dd1-46a2-4af5-b7d1-9d6d00a0bda9"
            alt="Not Found"
            className="group-17"
          />
          <div className="frame-156">
            <div className="frame-155">
              <p className="only-you-can-access">Only you can access</p>
            </div>
          </div>
        </div>
        <div className="frame-162">
          <div className="frame-1561">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/8d1jczp3xfn-201%3A3761?alt=media&token=ece7bd8a-9fea-4a96-ac20-3f6820498359"
              alt="Not Found"
              className="group-18"
            />
            <div className="frame-1551">
              <p className="everyone-who-has-link-ca">
                Everyone who has link can access
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
                    
                    </div>
                  </div>
                </div>


          
          <div className="frame-57">
            <div className="frame-56">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2pekb39nnrn-241%3A551?alt=media&token=50eade54-1e95-441c-9982-29db433e3fca"
                alt="Not Found"
                className="save"
              />
              <p type="button" className="savebutton" >{generatePdf()} </p>
            </div>
          </div>
          <div className="frame-49">
            <div className="frame-48">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2pekb39nnrn-241%3A558?alt=media&token=ed05d2ed-8d88-4a7c-aab9-2b92c743bc83"
                alt="Not Found"
                className="share-2"
              />
              <p type="button" data-toggle="modal" data-target="#myModal"  className="sharebutton"></p>
            </div>
          </div>
          {/**/}
          <div className="modal fade" id="myModal" role="dialog">
                  <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="pop-up-guest-invited clip-contents">
      <div className="group-446">
        <p className="accessible-person">Accessible person</p>
        <div className="frame-145">
          <p className="add-email-or-groups">Add email or groups</p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2v8n9aglm7c-201%3A3677?alt=media&token=447423fd-1148-407c-9953-033c5f622498"
            alt="Not Found"
            className="chevron-down"
          />
        </div>
        <div className="frame-148">
          <div className="frame-147">
            <div className="group-6">
                <p className="a">A</p>
              </div>
            <div className="frame-146">
              <p className="anna-_hr-you">Anna_HR (you)</p>
              <p className="anna-hr-mail-com">anna.hr@mail.com</p>
            </div>
          </div>
          <p className="owner">Owner</p>
        </div>
        <p className="general-access">General access</p>
        <div className="frame-157">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2v8n9aglm7c-201%3A3714?alt=media&token=0f349e10-9867-421e-9e72-89d79c32c01f"
            alt="Not Found"
            className="group-17"
          />
          <div className="frame-156">
            <div className="frame-155">
              <p className="only-you-can-access">Only you can access</p>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2v8n9aglm7c-201%3A3718?alt=media&token=5c6ee3ae-e80b-4b19-b055-3e0aa7bd9dc8"
                alt="Not Found"
                className="chevron-down-1"
              />
            </div>
          </div>
        </div>
        <div className="frame-161">
          <div className="frame-159">
            <div className="frame-158">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2v8n9aglm7c-201%3A3725?alt=media&token=68564ddc-b99e-4cde-a490-6ca8ec242621"
                alt="Not Found"
                className="link"
              />
              <p className="copy-link">Copy link</p>
            </div>
          </div>
          <div className="frame-160">
            <div className="frame-1581">
              <button className="donebutton" type="button"  data-dismiss="modal">Done</button>
            </div>
          </div>
        </div>
      </div>
    </div>
                    
                    </div>
                  </div>
                </div>
        </div>
      </div>
    </div>


    <div className="tools">
      <div className="headline">
        <p className="headline-1">Headline 1</p>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ie5fbqabsj-241%3A618?alt=media&token=4cd927a6-8b29-4f6c-bea1-b9f56eda8a5e"
          alt="Not Found"
          className="chevron-down"
        />
      </div>
      <div className="font-text">
        <p className="arial">Arial</p>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ie5fbqabsj-241%3A623?alt=media&token=0ea4fe65-f916-4d03-b032-a23a1a25e100"
          alt="Not Found"
          className="chevron-down-1"
        />
      </div>
      <p className="text-size">- 16 +</p>
      <div className="text-draw">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ie5fbqabsj-241%3A629?alt=media&token=2696b108-57c5-460e-9481-6ffed8cc233b"
          alt="Not Found"
          className="frame-100"
        />
        <div className="group-12">
          <div className="group-11">
            <div className="rectangle-11" />
          </div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ie5fbqabsj-241%3A641?alt=media&token=3f4db5ca-69ce-4f0c-82c9-ee8633596182"
            alt="Not Found"
            className="mdi-format-color-highlight"
          />
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ie5fbqabsj-241%3A646?alt=media&token=f42bc330-637c-4071-9e35-f20ffb5759bf"
          alt="Not Found"
          className="line-md-paint-drop-half-filled-twotone"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ie5fbqabsj-241%3A650?alt=media&token=a79ad517-1368-448b-be30-24e8b37837d5"
          alt="Not Found"
          className="edit-2"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ie5fbqabsj-241%3A652?alt=media&token=379b31a8-d2a2-440b-861b-4303a59390ff"
          alt="Not Found"
          className="square"
        />
      </div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ie5fbqabsj-241%3A655?alt=media&token=7b0e4612-9997-4cb4-8dcd-acbe2f8c6a3d"
        alt="Not Found"
        className="insert"
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ie5fbqabsj-241%3A675?alt=media&token=e46aa607-c788-4650-9a5a-53e5bdf21603"
        alt="Not Found"
        className="align"
      />
    </div>

    <div className="tab-barr clip-contents">
      <div className="group-259">
        <div className="boxes">
        <div type="button" data-toggle="modal" data-target="#myModal_new" className="newcontract-botton">
            <div className="frame-65">
              
              <p  className="newcontract_text">new contract</p>
            </div>
          </div>
          {/*popup new contract*/}
          <div className="modal fade" id="myModal_new" role="dialog">
                  <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="pop-up-guest-invited clip-contents">
      <div className="group-446">
        <p className="accessible-person">New contract</p>
        
       
     
      
        <div className="frame-161">
         
          <div className="frame-160">
            <div className="frame-1581">
              <button className="donebutton" type="button"  data-dismiss="modal">Done</button>
            </div>
          </div>
          <div type="button" className="frame-159">
            <div className="frame-158">
             
              <p className="copy-link">New</p>
            </div>
          </div>
        </div>
      </div>
    </div>
                    
                    </div>
                  </div>
                </div>

          <form  action="/action_page.php">
      <select className="select_type" name="cars" id="cars">
        <option value="Employee">Employee</option>
        <option value="Client">Client</option>
        <option value="Me">Me</option>
      </select>
    </form>

        </div>
        <div className="custom-fill">
          <p className="custom-fill-fields">Custom fill fields</p>
          <div className="custom-box">
            <div className="frame-144">
              <p className="personal-details">Personal details</p>
              <div className="personal-details-1">
                <div className="full-name-1">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ft4nord2bg7-241%3A739?alt=media&token=059c278f-7072-40b4-8103-c94a63d52ae4"
                    alt="Not Found"
                    className="user"
                  />
                  <p className="full-name">Full name </p>
                </div>
                <div className="address-1">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ft4nord2bg7-241%3A744?alt=media&token=ae685754-7107-4a17-968c-0777a815cf56"
                    alt="Not Found"
                    className="map-pin"
                  />
                  <p className="address">Address</p>
                </div>
                <div className="frame-85">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ft4nord2bg7-241%3A749?alt=media&token=cdc5fa3e-7613-4d4d-9756-614c1168cba2"
                    alt="Not Found"
                    className="credit-card"
                  />
                  <p className="personal-id">Personal ID</p>
                </div>
                <div className="email-1">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ft4nord2bg7-241%3A754?alt=media&token=607c7423-d3c4-407f-bd56-e442211ceca0"
                    alt="Not Found"
                    className="mail"
                  />
                  <p className="email">Email</p>
                </div>
                <div className="phone-number-1">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ft4nord2bg7-241%3A759?alt=media&token=c1742e60-0f39-40d2-a3fc-4bc416c509cd"
                    alt="Not Found"
                    className="phone"
                  />
                  <p className="phone-number">Phone number</p>
                </div>
                <div className="signature-1">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ft4nord2bg7-241%3A763?alt=media&token=3077b07b-5bab-40fe-956b-18774aa90027"
                    alt="Not Found"
                    className="edit-3"
                  />
                  <p className="signature">Signature</p>
                </div>
              </div>
            </div>
            <div className="frame-143">
              <p className="company-details">Company details</p>
              <div className="company-details-1">
                <div className="company-3">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ft4nord2bg7-241%3A771?alt=media&token=4d94ea8a-8f5c-4c4c-a406-48ad1b72f683"
                    alt="Not Found"
                    className="mdi-company"
                  />
                  <p className="company">Company</p>
                </div>
                <div className="department-1">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ft4nord2bg7-241%3A775?alt=media&token=48167d33-4567-4aa2-bc86-ee8fe9f951be"
                    alt="Not Found"
                    className="users"
                  />
                  <p className="department">Department</p>
                </div>
                <div className="position-1">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ft4nord2bg7-241%3A782?alt=media&token=a2c6c32c-8883-428f-8e52-b396190b3836"
                    alt="Not Found"
                    className="briefcase"
                  />
                  <p className="position">Position</p>
                </div>
                <div className="salary-1">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ft4nord2bg7-241%3A787?alt=media&token=575ccafa-ea1f-491b-9c7c-3888441cb9bf"
                    alt="Not Found"
                    className="dollar-sign"
                  />
                  <p className="salary">Salary</p>
                </div>
              </div>
            </div>
            <div className="frame-142">
              <p className="date-and-time">Date and time</p>
              <div className="date-time">
                <div className="date-2">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ft4nord2bg7-241%3A795?alt=media&token=e8741ab4-19a0-44ee-abb2-dd9cc037c58b"
                    alt="Not Found"
                    className="calendar"
                  />
                  <p className="date">Date</p>
                </div>
                <div className="time-2">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ft4nord2bg7-241%3A802?alt=media&token=28f5f314-12b0-472f-9a2c-9c335b6a0d27"
                    alt="Not Found"
                    className="clock"
                  />
                  <p className="time">Time</p>
                </div>
                <div className="salary-2">
                  <p className="_-123">123</p>
                  <p className="number">Number</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



{/*main*/}

<center>
{/*pdf*/}
<div>
<center>

<div className="body_pdf">

<EditorToolbar className="edit-toolbar"/>
<br/>
<br/>
 <ReactQuill
 className="text-data"
 theme="snow"
 value={content}
 onChange={handleContentChange}
 modules={modules}
 formats={formats}
/>
<br />
{/*<PDFViewer width={1000} height={600}>
 <Document>
   <Page size="A4" style={styles.page}>
     <View style={styles.section}>
       <Text style={styles.content}>{content}</Text>
     </View>
   </Page>
 </Document>
</PDFViewer> */}
<br />
</div>
      
    </center>

    </div>
{/*pdf*/}
{/*<iframe className="iframe_edit" src='https://paint.js.org/'></iframe>*/}
     
  
{/*กระดาษทดลอง*/}

    {/*กระดาษทดลอง*/}

{/*เลือกหน้ากระดาษ
     <div>
            <button onClick={goToPreviousPage}>Previous</button>
            <span>Page {currentPage} of {numPages}</span>
            <button onClick={goToNextPage}>Next</button>
          </div>
         */}
    </center>
{/*main*/}


<br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <div className="bottom-nav clip-contents">
      <div className="group-447">
        <div className="frame-109">
          <div type="button" className="fav-botton">
            <div className="frame-65">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/awg470pvl9-241%3A575?alt=media&token=8268882a-eb17-4bc6-b28a-b2deecb598d0"
                alt="Not Found"
                className="heart"
              />
              <p className="add-to-favorite">Add to favorite</p>
            </div>
          </div>
          <div  type="button" data-toggle="modal" data-target="#myModal_preview" className="preview-1" >
            <div className="frame-89">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/awg470pvl9-241%3A580?alt=media&token=9c63d45d-0542-4c3c-8b30-272cbad1e262"
                alt="Not Found"
                className="eye"
                type="button"
              />
               <p   className="preview"></p>
            </div>
          </div>
          {/**/}
           {/*popup new contract*/}
           <div className="modal fade" id="myModal_preview" role="dialog">
                  <div className="popup_preview_pdf">
                    <div className="modal-content">

       <PDFViewer   width={800} height={800} >
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Text style={styles.content}>{content}</Text>
              </View>
            </Page>
          </Document>
        </PDFViewer>
                    
                    </div>
                  </div>
                </div>
          {/**/}
        </div>
        <div className="frame-108">
          <div className="zoom-in-out-line">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/awg470pvl9-241%3A586?alt=media&token=df058e92-42e3-40e0-bc22-18ab426fde14"
              alt="Not Found"
              className="group-9"
            />
            <p className="_-50">50%</p>
          </div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/awg470pvl9-241%3A590?alt=media&token=93ac14af-ed9b-4bf3-9ca5-81471dcafe9b"
            alt="Not Found"
            className="frame-107"
          />
        </div>
      </div>
    </div>


    </>
  );
}

export default create
