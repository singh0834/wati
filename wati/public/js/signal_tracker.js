frappe.ui.form.on('Signal Tracker', {
	refresh: function (frm) {
        // var concatenatedNumbers='';
        // frappe.call({
        //     method: 'frappe.client.get_list',
        //     args: {
        //         doctype: 'Customer',
        //         fields: ['name', 'mobile_no'],
        //         filters: {
        //             'service': frm.doc.service_name
        //         },
        //     },

        //     callback: function(response) {
        //         if (response.message) {
        //             var mobileNumbers = response.message.map(function(customer) {
        //                 return customer.mobile_no;
        //             });
    
        //             concatenatedNumbers = mobileNumbers.join(', ');
        
        //             console.log('Mobile Numbers:', concatenatedNumbers);
        //         } else {
        //             console.error('Error fetching customer data.');
        //         }
        //     }
        // });
        
        
        // frm.add_custom_button(__('Send Message'), function () {         
        //     let counter = 0
        //     let context = {}
        //     let contact_dict = {};
        //     let contact_list = [];
        //     let contacts = [];
        //     function verify(d, context, data, header_html) {
        //         for (const [key, value] of Object.entries(context)) {
        //             if ((d.get_field(key).input.value).replace(", ", "") == "Attachment") {
        //                 if (d.get_field(key + "_attachment").value == null || d.get_field(key + "_attachment").value.length == 0) {
        //                     return
        //                 }
        //                 else if(d.get_field(key + "_attachment").value && d.get_field(key + "_attachment").value.includes("/private/")){
        //                     d.get_field(key + "_attachment").value = ""
        //                     d.get_field(key + "_attachment").refresh()
        //                     frappe.msgprint("Attachment File can't be Private")
        //                 }
        //                 else if (d.get_field(key + "_attachment").value && d.get_field(key + "_attachment").value.includes("https://")) {
        //                     context[key] = (d.get_field(key + "_attachment").value)
        //                 } else {
        //                     context[key] = ("https://" + frappe.boot.sitename + d.get_field(key + "_attachment").value)
        //                 }
        //             } else if ((d.get_field(key).input.value).replace(", ", "") == "Print Format") {
        //                 frappe.call({
        //                     method: "wati.users.get_attach_link",
        //                     args: { "doc": { "doctype": cur_frm.doc.doctype, "docname": cur_frm.doc.name }, "print_format": d.get_field(key + "_print_format").value },
        //                     callback: (r) => {
        //                         context[key] = r.message
        //                     }
        //                 })
        //             } else {
        //                 context[key] = (d.get_field(key).input.value).replace(", ", "");
        //             }
        //         }
        //         // $(d.get_field('content').wrapper).html(
        //         // 	`<div class="card mb-3 h-100"><div class="card-body">` + frappe.render(header_html, context) + frappe.render(data.message_body, context) + `<br><br></div></div>`
        //         // );
        //         $(d.get_field('content').wrapper).html(
        //             `<div class="card mb-3 h-100"><div class="card-body">` + header_html + data.message_body + `<br><br></div></div>`
        //         );
        //         d.get_primary_btn()[0].disabled = false
        //     }
        //     cur_frm.meta.fields.forEach((e) => { if (e.options == "Phone" || e.fieldname == "contact_phone" || e.fieldname == "contact_mobile") { contact_dict[e.fieldname] = e.label } })
        //     let doc_field_list = [{
        //         "value": "Attachment",
        //         "description": "Attach a file"
        //     }]
        //     if (frappe.model.can_print(null, cur_frm) && !cur_frm.meta.issingle) {
        //         doc_field_list.push({
        //             "value": "Print Format",
        //             "description": "Print Format"
        //         })
        //     }
        //     let data_link_dict = {}
        //     cur_frm.meta.fields.forEach((e) => { if (e.fieldtype == "Data" || e.fieldtype == "Link") { data_link_dict[e.fieldname] = e.label } })
        //     for (const [key, value] of Object.entries(cur_frm.doc)) {
        //         if (key in data_link_dict && value.replaceAll(" ", "") != "") {
        //             doc_field_list.push({
        //                 "value": value,
        //                 "description": data_link_dict[key]
        //             })
        //         }
        //         if (key in contact_dict && value.replaceAll(" ", "") != "") {
        //             if(!contacts.includes(value)){
        //                 contacts.push(value)
        //                 contact_list.push({
        //                     "value": value,
        //                     "description": contact_dict[key]
        //                 })
        //             }
        //         }
        //     }
        //     var d = new frappe.ui.Dialog({
        //         'fields': [
        //             { 'label': __("To"), 'fieldname': 'mobile_no', 'default':concatenatedNumbers,'fieldtype': 'MultiSelect', 'options': contact_list, 'description': "<strong>Note</strong>: Please enter contact with Country Code" },
        //             {
        //                 'label': __("Template"),
        //                 'fieldname': 'template',
        //                 'fieldtype': 'Link',
        //                 'options': "WhatsApp Template",
        //                 "get_query": function () {
        //                     return {
        //                         filters: {
        //                             "enabled": 1
        //                         }
        //                     };
        //                 },
        //                 onchange: function (e) {
        //                     if(this.value){
        //                     frappe.db.get_doc("WhatsApp Template", this.value)
        //                         .then((data) => {
        //                             counter += 1
        //                             if (counter == 1) {
        //                                 cur_frm.broadcast_name = data.broadcast_name
        //                                 const elements = document.getElementsByClassName("modal-body ui-front");
        //                                 const elementsArray = [...elements];
        //                                 elementsArray.forEach(e => {
        //                                     e.addEventListener("click", function () {
        //                                         verify(cur_frm.dialog_d, cur_frm.dialog_context, cur_frm.dialog_data, cur_frm.dialog_header_html);
        //                                     });
        //                                 });
            
        //                                 cur_frm.fields_list = data.whatsapp_map
        //                                 let option_list = ["Attachment"]
        //                                 if (frappe.model.can_print(null, cur_frm) && !cur_frm.meta.issingle) {
        //                                     option_list.push("Print Format")
        //                                 }
        //                                 data.whatsapp_map.forEach((e) => {
        //                                     if (e.location == "header") {
            
        //                                         d.make_field({
        //                                             "fieldtype": "Select",
        //                                             "label": e.field_name,
        //                                             "fieldname": e.field_name,
        //                                             "options": option_list,
        //                                             "reqd": 1
        //                                         })
        //                                     } else {
        //                                         d.make_field({
        //                                             "fieldtype": "MultiSelect",
        //                                             "label": e.field_name,
        //                                             "fieldname": e.field_name,
        //                                             "reqd": 1
        //                                         })
            
        //                                     }
        //                                     // make attach field for every field
        //                                     d.make_field({
        //                                         "label": __("Attachment"),
        //                                         "fieldtype": "Attach",
        //                                         "fieldname": e.field_name + "_attachment",
        //                                         "hidden": true
        //                                     })
            
        //                                     d.get_field(e.field_name + "_attachment").refresh()
            
        //                                     // make print_format field for every field
        //                                     d.make_field({
        //                                         "label": __("Select Print Format"),
        //                                         "fieldtype": "Select",
        //                                         "fieldname": e.field_name + "_print_format",
        //                                         "options": frappe.meta.get_print_formats(cur_frm.meta.name),
        //                                         "hidden": true
        //                                     });
        //                                     d.get_field(e.field_name + "_print_format").refresh()
            
        //                                     d.get_field(e.field_name).refresh();
        //                                     context[e.field_name] = "";
            
        //                                     if (e.location != "header") {
        //                                         d.get_field(e.field_name).set_data(doc_field_list)
        //                                     }
            
        //                                     d.fields_dict[e.field_name].input.onchange = function () {
        //                                         if (this.value && this.value.replace(", ", "") == "Attachment") {
        //                                             d.get_field(e.field_name + "_attachment").df.hidden = false
        //                                             d.get_field(e.field_name + "_attachment").value = ""
        //                                             d.get_field(e.field_name + "_attachment").refresh()
            
        //                                             d.get_field(e.field_name + "_print_format").df.hidden = true
        //                                             d.get_field(e.field_name + "_print_format").refresh()
        //                                             cur_frm.dialog_context[e.field_name] = ""
        //                                         }
        //                                         else if (this.value && this.value.replace(", ", "") == "Print Format") {
        //                                             d.get_field(e.field_name + "_attachment").df.hidden = true
        //                                             d.get_field(e.field_name + "_attachment").refresh()
            
        //                                             d.get_field(e.field_name + "_print_format").df.hidden = false
        //                                             d.get_field(e.field_name + "_print_format").refresh()
        //                                             cur_frm.dialog_context[e.field_name] = ""
        //                                         } else {
        //                                             d.get_field(e.field_name + "_attachment").df.hidden = true
        //                                             d.get_field(e.field_name + "_attachment").refresh()
            
        //                                             d.get_field(e.field_name + "_print_format").df.hidden = true
        //                                             d.get_field(e.field_name + "_print_format").refresh()
        //                                         }
            
        //                                         verify(cur_frm.dialog_d, cur_frm.dialog_context, cur_frm.dialog_data, cur_frm.dialog_header_html)
            
        //                                     }
            
        //                                 })
        //                                 let header_html = "";
        //                                 if (!["text", "", undefined, null].includes(data.header_type)) {
        //                                     header_html = data.header_type.charAt(0).toUpperCase() + data.header_type.slice(1) + ` Attachment: <a href="` + data.header_link + `">` + data.header_link + `</a><br><br>`
            
        //                                 }
        //                                 $(d.get_field('content').wrapper).html(
        //                                     `<div class="card mb-3 h-100"><div class="card-body">` + header_html + data.message_body + `<br><br></div></div>`
        //                                 );
            
        //                                 cur_frm.dialog_d = d
        //                                 cur_frm.dialog_context = context
        //                                 cur_frm.dialog_data = data
        //                                 cur_frm.dialog_header_html = header_html
        //                             }
        //                         });
        //                 }
        //             }},
            
        //             { 'label': __("Content"), 'fieldname': 'content', 'fieldtype': 'HTML' },
            
        //         ],
                
        //         primary_action: function () {
        //             frappe.call({
        //                 method: "wati.wati.doctype.wati_settings.wati_settings.send_template_message_followup",
        //                 args: { "doc": { "doctype": cur_frm.doc.doctype, "docname": cur_frm.doc.name }, "whatsapp_numbers": d.get_field("mobile_no").input.value.replaceAll(" ", "").split(","), "broadcast_name": cur_frm.broadcast_name || "Broadcast", "template_name": d.get_field("template").value, "template_parameters": context, "service_name": frm.doc.service_name},
        //                 callback: (r) => {
        //                     if (r.result === undefined) {
        //                         frappe.show_alert("WhatsApp message sent successfully");
        //                         d.hide();
        //                     } else {
        //                         d.hide();
        //                         frappe.show_alert(r.error || "An error occurred. Please Retry");
        //                     }
        //                 }
        //             });
            
        //         },
        //         primary_action_label: __("Send"),
        //         no_submit_on_enter: true,
        //         size: 'large',
        //         minimizable: true,
        //         title: ("Send Follow Up Messages"),
        //     });
            
        //     d.show();
        //     d.get_primary_btn()[0].disabled = true
                
        // }, __("Follow Up"));
    }
});
