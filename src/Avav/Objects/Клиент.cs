﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Avav
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Клиент.
    /// </summary>
    // *** Start programmer edit section *** (Клиент CustomAttributes)

    // *** End programmer edit section *** (Клиент CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КлиентE", new string[] {
            "имя as \'Имя\'"})]
    [View("КлиентL", new string[] {
            "имя as \'Имя\'"})]
    public class Клиент : ICSSoft.STORMNET.DataObject
    {
        
        private string fимя;
        
        // *** Start programmer edit section *** (Клиент CustomMembers)

        // *** End programmer edit section *** (Клиент CustomMembers)

        
        /// <summary>
        /// имя.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.имя CustomAttributes)

        // *** End programmer edit section *** (Клиент.имя CustomAttributes)
        [StrLen(255)]
        public virtual string имя
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.имя Get start)

                // *** End programmer edit section *** (Клиент.имя Get start)
                string result = this.fимя;
                // *** Start programmer edit section *** (Клиент.имя Get end)

                // *** End programmer edit section *** (Клиент.имя Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.имя Set start)

                // *** End programmer edit section *** (Клиент.имя Set start)
                this.fимя = value;
                // *** Start programmer edit section *** (Клиент.имя Set end)

                // *** End programmer edit section *** (Клиент.имя Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КлиентE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлиентE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлиентE", typeof(IIS.Avav.Клиент));
                }
            }
            
            /// <summary>
            /// "КлиентL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлиентL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлиентL", typeof(IIS.Avav.Клиент));
                }
            }
        }
    }
}
