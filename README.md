<h2>Zaiper Automationsh2>
<p>This python script was created for my Zaiper Automation Work Flows (Zap)</p>
<p>Built for Center Stage Floors, LLC by Rene Monreal and currently in use by the company </p>
<br>
<h3>How it works = python timestamp</h3>
<p> Center Stage Floors, LLC used Quickbooks as a merchant account, being limited to what data they can see. I (Rene Monreal) created a Zaiper Automation workflow to dected when an invoice or esitmate is created and or updated. Following the detection the automation will capture all of the that particular job's data from their CRM (airtable) and paste the both quickbooks and airtable infromation onto a google spread sheet. Before pasting the information to its according column, this python script runs to capture the data of the automation (Time can also be included by adjusting the time format but i decided on just the date). </p>
<br>
<h3>How it works = Zaiper Webhook</h3>
<p>Center Stage Floors, LLC has a CRM platfrom known as airtable, first step in the Zapier Automation is to detect when a new record is created or an existing record is updated. Once detected the selected record will then be filtered by Zaipers filtering opion/step for specific requirements. When requirements are meet this python script with run for that follownig record. </p>
<h2>Where are the rest of the variables? </h2>
<p>Following the 2nd step of the automation work flow, when a record meets certain contitions its contents are then presented in a value set zapier has in its software. Once selected from the menu, i can then use them in my line of code. Example: "Webhook" is an input data i assinged on zapier, its value is the Webhook URL. </p>
<h2>What is a Webhook in Zapier?</h2>
<p>First note that in order to send a webhook to zaiper, you must manually open the webhook URL for Zapier to revice its contents. <b><i> What is a webhook? : </i></b> Webhooks are automated messages sent from apps when something happens. They have a message—or payload—and are sent to a unique URL—essentially the app's phone number or address. Webhooks are usually used to connect apps and systems, allowing them to share real-time data.</p>

<p>Regarding any questions or intrests, feel Free to contact me about this and or other projects: www.linkedin.com/in/renemonreal </p>
