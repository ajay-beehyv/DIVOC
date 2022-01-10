// Code generated by go-swagger; DO NOT EDIT.

package certification

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"
)

// GetTestCertifyUploadsOKCode is the HTTP code returned for type GetTestCertifyUploadsOK
const GetTestCertifyUploadsOKCode int = 200

/*GetTestCertifyUploadsOK OK

swagger:response getTestCertifyUploadsOK
*/
type GetTestCertifyUploadsOK struct {

	/*
	  In: Body
	*/
	Payload []interface{} `json:"body,omitempty"`
}

// NewGetTestCertifyUploadsOK creates GetTestCertifyUploadsOK with default headers values
func NewGetTestCertifyUploadsOK() *GetTestCertifyUploadsOK {

	return &GetTestCertifyUploadsOK{}
}

// WithPayload adds the payload to the get test certify uploads o k response
func (o *GetTestCertifyUploadsOK) WithPayload(payload []interface{}) *GetTestCertifyUploadsOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the get test certify uploads o k response
func (o *GetTestCertifyUploadsOK) SetPayload(payload []interface{}) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *GetTestCertifyUploadsOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	payload := o.Payload
	if payload == nil {
		// return empty array
		payload = make([]interface{}, 0, 50)
	}

	if err := producer.Produce(rw, payload); err != nil {
		panic(err) // let the recovery middleware deal with this
	}
}