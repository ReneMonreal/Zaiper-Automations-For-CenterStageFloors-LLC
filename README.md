<h1>Zaiper Automations</h1>
<p>This python script was created for my Zaiper Automation Work Flows (Zap)</p>
<p>Built for Center Stage Floors, LLC by Rene Monreal and currently in use by the company </p>
<br>
<h2>How it works = Leadstage_FollowupDate</h2>
<p>After following up with clients Center Stage Floors's sale team updates each "Opportunity"/"potential Project" (each has its own Record ID) on airtable. Under the followup stage column under each record, it is a salesperson to update the CRM to notify other sales people they followed up and when. Increasing each stage to the next based on the previous followup stage, adding any addtional project notes recived from the client into a notes section, and lastly typing the date they followed up. <b>HOWEVER</b>, with an automatic followup email being sent, noone captures or updates the followup stage nor the date of the followup</p>
<h4>What this does</h4>
<p>When the automatic followup occurs, this script detects the orginal followup stage that particular record underwent previously. Then updates the followup stage to the next incrementation, Another thing this script does is it detects the new followup stage, and pastes the date the script ran into that followup stage data column.</p>
<p>Example: lets say the automated followup occured on a record that was on its 2nd followup already, the script would increment the followup stage to the next in line, this would convert it into "3rd followup occured". Knowing this is on its 3rd follow, it will go under the 3rd followup date column and paste the date it ran.</p>
<h2>How it works = Automation Time stamp</h2>
<p> Center Stage Floors, LLC used Quickbooks as a merchant account, being limited to what data they can see. I (Rene Monreal) created a Zaiper Automation workflow to dected when an invoice or esitmate is created and or updated. Following the detection the automation will capture all of the that particular job's data from their CRM (airtable) and paste the both quickbooks and airtable infromation onto a google spread sheet. Before pasting the information to its according column, this python script runs to capture the data of the automation (Time can also be included by adjusting the time format but i decided on just the date). </p>
<br>
<h2>How it works = Auto Open Zaiper Webhook</h2>
<p>Center Stage Floors, LLC has a CRM platfrom known as airtable, first step in the Zapier Automation is to detect when a new record is created or an existing record is updated. Once detected the selected record will then be filtered by Zaipers filtering opion/step for specific requirements. When requirements are meet this python script with run for that follownig record. </p>
<h4>Where are the rest of the variables? </h4>
<p>Following the 2nd step of the automation work flow, when a record meets certain contitions its contents are then presented in a value set zapier has in its software. Once selected from the menu, i can then use them in my line of code. Example: "Webhook" is an input data i assinged on zapier, its value is the Webhook URL. </p>
<h4>What is a Webhook in Zapier?</h4>
<p>First note that in order to send a webhook to zaiper, you must manually open the webhook URL for Zapier to revice its contents. <b><i> What is a webhook? : </i></b> Webhooks are automated messages sent from apps when something happens. They have a message—or payload—and are sent to a unique URL—essentially the app's phone number or address. Webhooks are usually used to connect apps and systems, allowing them to share real-time data.</p>

<p>Regarding any questions or intrests, feel Free to contact me about this and or other projects: renemonreal24@gmail.com   ---   www.linkedin.com/in/renemonreal </p>
