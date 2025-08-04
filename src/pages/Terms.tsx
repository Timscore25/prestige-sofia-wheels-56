
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-primary-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            General Terms and Conditions of Vehicle Rental
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-700 mb-6">
                Advance Auto Group Ltd in its capacity of Lessor, rents a car (vehicle) to the Lessee against payment of rental fees under the following General Terms and Conditions.
              </p>

              <h2 className="text-2xl font-bold text-primary-navy mb-4">I. Submission and Acceptance</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">1.1.</h3>
                <p className="text-gray-700 mb-4">
                  The minimum rental term is 24 hours and the vehicle is rented to the lessee in good condition with all mandatory equipment and documents required by the Traffic Police authorities, as recorded in the Bilaterally signed Acceptance Protocol (hereinafter referred to as BAP) which is an integral part of the Rental Agreement and which terms and conditions also cover the vehicle return. The Lessee is obligated to return the vehicle with all received documents and accessories within the agreed time and place in the same condition as originally submitted according to BAP.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">1.2.</h3>
                <p className="text-gray-700 mb-4">
                  In case of foreseen or unforeseen failure to the Lessee to comply with the deadline for returning the vehicle, they are obligated to notify the Lessor not later than the agreed return hour. For a delay longer than 60 minutes the Lessee owes a penalty in the amount of the daily vehicle rental price according to the agreed rental rate in the Rental Agreement.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">1.3.</h3>
                <p className="text-gray-700 mb-4">
                  Failure of the Lessee to comply with the obligation to return the vehicle for more than two days without informing the Lessor shall be deemed to be misappropriation within the meaning of the Criminal Code and the Lessor shall notify the competent authorities, retaining all rights under this Rental Agreement.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">1.4.</h3>
                <p className="text-gray-700 mb-4">
                  In arising the hypothesis of the clause 1.3. above the Lessor is entitled to keep the guarantee deposit paid by the Lessee upon signing the Rental Agreement.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-primary-navy mb-4">II. Damage, Losses, Thefts and Others</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">2.1.</h3>
                <p className="text-gray-700 mb-4">
                  In case of any damage, loss or theft of the vehicle or its parts, including, but not limited to fire or glass breakage by fault of the Lessee, the latter shall be obligated to pay the Lessor compensation from 300 to 50000 euro depending on the class of the vehicle for each damaged detail, including the cost of renting the replacement car, return costs, lost profits and rent.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">2.2.</h3>
                <p className="text-gray-700 mb-4">
                  Lessee's liability may be limited through the payment and acceptance of additional charges "Super Collision Damage Waiver" (SCDW) and "Super Theft Protection Waiver" (STPW), certified and determined upon signing the Rental Agreement and they are not subject to refund. Upon payment of the above charges the liability of the Lessee is reduced to the amount of the charges excluding the cases covered by clause 5.5. of these General Terms and Conditions.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">2.3.</h3>
                <p className="text-gray-700 mb-4">
                  Liability for damage caused by third parties, caused guiltily by the Lessee, is covered by the Third Party Liability insurance up to its limit, except in the cases referred to in clauses 5.1, 5.2, 5.3 and 5.4 of these General Terms and Conditions.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">2.4.</h3>
                <p className="text-gray-700 mb-4">
                  If the navigation system is stolen or lost, the Lessee must pay a fine of EUR 200.00.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">2.5.</h3>
                <p className="text-gray-700 mb-4">
                  In case the documents, keys, registration plates of the rented car are stolen, lost or destroyed, the Lessor can keep the guarantee deposit given on the signing of the rental contract.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">2.6.</h3>
                <p className="text-gray-700 mb-4">
                  In case the parking ticket and/or the parking card for parking at the public car parks at Sofia, Plovdiv, Varna, Burgas airports is lost, the Lessee must pay a fine of EUR 200.00.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">2.7.</h3>
                <p className="text-gray-700 mb-4">
                  In case of lost, broken or stolen baby seat or booster seat, the Lessee must pay a fine of EUR 150,00.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">2.8.</h3>
                <p className="text-gray-700 mb-4">
                  In case of a broken seat, broken trim or anything regarding the structural integrity of the interior of the car, the Lessor can keep the guarantee deposit given on the signing of the rental contract.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">2.9.</h3>
                <p className="text-gray-700 mb-4">
                  In case of a lost GPS that is in the car for seeing the exact location of it, the Lessor can keep the guarantee deposit given on the signing of the rental contract.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">2.9.1.</h3>
                <p className="text-gray-700 mb-4">
                  In case of a car accident an administration charge of EUR 80.00 is payable regardless of whose fault the incident occurred. (The administration fee is for all the necessary work that needs to be done after the accident)
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">2.9.2.</h3>
                <p className="text-gray-700 mb-4">
                  In case of an incident in which the Lessee is injured physically or mentally or has died, the Lessor bears no responsibility.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-primary-navy mb-4">III. Prices and Payment Methods</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">3.1.</h3>
                <p className="text-gray-700 mb-4">
                  By signing the Rental Agreement upon receiving the vehicle the Lessee undertakes the obligation to pay the final amount of the Rental Agreement which represents the sum of the amounts specified in detail in this Rental Agreement by means of payment approved by the Lessor (vouchers, credit cards, debit cards, bank transfer, cash).
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">3.1.1.</h3>
                <p className="text-gray-700 mb-4">
                  Online payments are made by credit/debit card through a licensed banking institution.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">3.2.</h3>
                <p className="text-gray-700 mb-4">The Lessee undertakes the obligation to pay the Lessor:</p>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>The daily rent and CDW, TPW and, if accepted, SCDW and STPW charges to limit liability for damage and/or vehicle theft and any additional services mentioned in the Rental Agreement;</li>
                  <li>All additional charges for one-way rentals (rent with return of the vehicle in an office location other than the rental office location), if any;</li>
                  <li>All fees and fines for improper parking and non-observance of the Road Traffic Act relating to the vehicle and the relevant rental period, as well as an administrative fee in the amount of EUR 50.00;</li>
                  <li>Lessor's expenses, including officially incurred costs permitted by law, for collecting the amounts owed by the Lessee;</li>
                  <li>The cost of the missing liters of fuel calculated at EUR 5,00 per liter, as well as an administrative fee of EUR 30,00;</li>
                  <li>Applicable fees and VAT.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">3.3.</h3>
                <p className="text-gray-700 mb-4">
                  The Lessee undertakes the obligation to pay a guarantee deposit in the amount of EUR 300 to 50000 signing the Rental Agreement depending on the class of the vehicle. Upon returning the vehicle in good condition according to the BAP the deposit is released.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-primary-navy mb-4">IV. Responsibilities of the Lessor</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">4.1.</h3>
                <p className="text-gray-700 mb-4">
                  The Lessor is liable for damage resulting from a technical failure of the rented vehicle, as determined by an independent vehicle expert.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">4.2.</h3>
                <p className="text-gray-700 mb-4">
                  The Lessor undertakes to provide the Lessee with a replacement vehicle for the period for which the Rental Agreement of the defective vehicle is concluded.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">4.3.</h3>
                <p className="text-gray-700 mb-4">
                  In case of a Lessee's failure to fulfill the Rental Agreement the Lessor has the right to take all legal actions to discontinue the use of the property by the Lessee.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-primary-navy mb-4">V. Obligations and Responsibilities of the Lessee</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">5.1.</h3>
                <p className="text-gray-700 mb-2">The Lessee is obligated:</p>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>To use the vehicle as intended, to handle it with the care of good owner and keep it in a clean state;</li>
                  <li>In case of an accident, damage or failure to take all necessary measures to rescue, limit and/or decrease damage to the rented vehicle;</li>
                  <li>In case of theft, accident or damage to a vehicle, except minor incidents, to comply with the requirements of the Road Traffic Act and the regulations for its implementation concerning the obligatory receipt of a Police Report and other documents.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">5.2.</h3>
                <p className="text-gray-700 mb-2">The Lessee undertakes the obligation to observe the interests of the Lessor and the insurance company in case of road accident or theft by:</p>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Providing names and addresses of participants and witnesses;</li>
                  <li>Not transferring responsibility and guilt and not making payments to people involved in the road accident;</li>
                  <li>Not leaving the vehicle without the necessary precautions in respect to their safety;</li>
                  <li>Notifying Advance Auto Group OOD by phone, even in case of a minor accident;</li>
                  <li>Notifying the police immediately, if it is necessary to determine the guilt of another participant in the accident;</li>
                  <li>Making sure that when there is nobody in the vehicle it is locked and that the car keys and the documents are kept by the Lessee.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">5.3.</h3>
                <p className="text-gray-700 mb-2">The Lessee is not entitled:</p>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>To use the vehicle for towing another vehicle or trailer, for racing purposes, sporting events, training, testing;</li>
                  <li>To drive the vehicle drunk or after using drugs or intoxicating medicines;</li>
                  <li>To drive the vehicle off the road surface/road marking;</li>
                  <li>To smoke in the rented vehicle;</li>
                  <li>To give a person not authorized by the Lessor to drive the vehicle;</li>
                  <li>To use the rented vehicle for transportation of goods prohibited by the Customs Act;</li>
                  <li>To drive the vehicle outside the territory of the Republic of Bulgaria without authorization;</li>
                  <li>To make unauthorized repairs of the vehicle;</li>
                  <li>To transfer their rights and obligations under this Rental Agreement to a third party unless previously approved.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">5.4.</h3>
                <p className="text-gray-700 mb-4">
                  The Lessee must have a current driving license valid for more than one year but not less than the term of the Rental Agreement, must be eighteen years of age and have not less than six months of driving experience.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">5.5.</h3>
                <p className="text-gray-700 mb-4">
                  In case Lessee fails to comply with the restrictive conditions of these clauses and harmful consequences occur in the vehicle, the Lessee owes the Lessor compensation at an amount determined by an independent expert evaluation.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">5.6.</h3>
                <p className="text-gray-700 mb-4">
                  By signing this contract the client agrees their credit/debit card info and after returning the car they accept transaction being made with it by the company.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">5.7.</h3>
                <p className="text-gray-700 mb-4">
                  In case of careless exploitation by the Lessee, if the vehicle is returned in an extremely dirty condition, the Lessee is obligated to pay a fine of EUR 150.00.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">5.8.</h3>
                <p className="text-gray-700 mb-4">
                  Smoking of any kind (cigarettes, electronic cigarettes, cigars, vapes, shisha) in the vehicle is strictly forbidden, in case of breach found by the Lessor, the Lessee can keep the guarantee deposit given on the signing of the rental contract.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">5.9.</h3>
                <p className="text-gray-700 mb-4">
                  With the signing of this Rental Contract, the Lessee gives his right to make any dispute transactions to the Lessor.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">6.0.</h3>
                <p className="text-gray-700 mb-4">
                  By signing the Rental Agreement the Lessee confirms that they have been provided with information according to article 19, paragraph 1 of the Personal Data Protection Act (PDPA), they are aware that the provision of their personal data is voluntary, as well as they are aware of their right provided by PDPA and give their unconditional consent their personal data to be collected, processed and transferred to third parties.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">6.1.</h3>
                <p className="text-gray-700 mb-4">
                  With my signature, I confirm that I agree to the terms and conditions and I am aware of the Privacy and Data policy of Advance Auto Group LTD.
                </p>
              </div>

              <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-600">
                  Last updated: January 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Terms;
